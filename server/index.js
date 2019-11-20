const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv-safe');
require('isomorphic-fetch');

const { NODE_ENV, ENV_PATH } = process.env;
const envDefaultPath = path.resolve(__dirname, '../.env');
const pathToEnvFile = (fs.existsSync(ENV_PATH) && ENV_PATH) || (fs.existsSync(envDefaultPath)
  && envDefaultPath
);

if (pathToEnvFile) {
  dotenv.config({ path: pathToEnvFile, allowEmptyValues: true });
}

const express = require('express');
const expressUncapitalize = require('express-uncapitalize');
const next = require('next');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const formatValidation = require('string-format-validation');
const { mailgunAuth, hubSpot } = require('./config');
const { postsDatePair } = require('./postsort.config');
const { getTeam, getCareers } = require('./get-info-from-googleapis');
const { checkRequiredEstimateFields } = require('./validator');
const iplocation = require('iplocation').default; 
const fileUpload = require('express-fileupload');
const checkAttachment = require('./attachment-validator');

const dev = NODE_ENV !== 'production';
const DEFAULT_PORT = 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

const sendContactToHubSpot = (hubSpotParameters) => {
  const parameters = querystring.stringify(hubSpotParameters);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Content-Length': parameters.length,
    },
  };
  const { userId, formId } = hubSpot;
  const hubUrl = `https://forms.hubspot.com/uploads/form/v2/${userId}/${formId}?${parameters}`;

  fetch(hubUrl, options)
    .then((res) => res.text())
    .then((text) => {
      console.log('=========');
      console.log(text);
      try {
        const parsedResponse = JSON.parse(text);
        return Promise.resolve(parsedResponse);
      } catch (err) {
        throw new Error(text);
      }
    })
    .catch((error) => console.log('Hubspot request error: ', error));
};

app.prepare().then(() => {
  const server = express();
  let transporter = { sendMail: (mail) => { console.warn('Can\'t send email: Mailgun not initialized properly.', mail); } };
  if (mailgunAuth.auth.api_key) {
    transporter = nodemailer.createTransport(mailgun(mailgunAuth));
  }

  server.set('port', process.env.PORT || DEFAULT_PORT);

  server.use(bodyParser.json());
  server.use(expressUncapitalize());
  server.use(express.static('public'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(fileUpload({
    limits: {
        fileSize: 1000000 // 1mb
    },
    abortOnLimit: true
 }));

  server.post('/contact', (req, res) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      message,
      isSubscriber,
      hasDiscount,
    } = JSON.parse(req.body.data);

    firstname.value = firstname.value.replace(/\s+/g, ' ');
    lastname.value = lastname.value.replace(/\s+/g, ' ');
    phone.value = phone.value.replace(/\s+/g, ' ');
    message.value = message.value.replace(/\s+/g, ' ');

    if (!formatValidation.validate({ min: 3, max: 25 }, firstname.value)) {
      firstname.error = true;

      res.send({
        errorField: { firstname },
        status: 'Wrong first name length',
      });
      return;
    }
    if (!formatValidation.validate({ min: 3, max: 25 }, lastname.value)) {
      lastname.error = true;

      res.send({
        errorField: { lastname },
        status: 'Wrong last name length',
      });
      return;
    }
    if (!formatValidation.validate({ type: 'email' }, email.value)) {
      email.error = true;

      res.send({
        errorField: { email },
        status: 'Wrong email address',
      });
      return;
    }
    if (!formatValidation.validate({ min: 3, max: 25 }, phone.value)) {
      phone.error = true;

      res.send({
        errorField: { phone },
        status: 'Wrong phone length',
      });
      return;
    }
    if (!formatValidation.validate({ min: 0, max: 800 }, message.value)) {
      message.error = true;

      res.send({
        errorField: { message },
        status: 'Wrong message length',
      });
      return;
    }

    let attachment;
    try {
      attachment = checkAttachment(req.files);
    } catch(e) {
      res.send({ status: e.message });
    }

    const html = `
      <p>${firstname.value} ${lastname.value}</p>
      <p>Email: ${email.value}</p>
      <p>Phone: ${phone.value}</p>
      <p>I want to use a subscriber discount: ${hasDiscount ? 'Checked' : 'Unchecked'}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${message.value}</div>
    `;
    const mailOptions = {
      from: 'maxim.savonin@keenethics.com',
    //  to: 'business@keenethics.com, oleh.romanyuk@keenethics.com',
      to: 'vitaliy.melnychenko@keenethics.com',
      subject: `New message from ${email.value}`,
      html,
      attachments: [
        attachment
      ]
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        throw err;
      }
      res.send({
        errorField: {},
        status: 'Message sent',
      });
    });

    const hubSpotParameters = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value.toString(),
      isSubscriber: !!isSubscriber,
      hasDiscount: !!hasDiscount,
    };

    //sendContactToHubSpot(hubSpotParameters);
  });
  server.post('/estimate', (req, res) => {
    const formFildsData = JSON.parse(req.body.data)
    const {
      stage,
      services,
      pm,
      budget,
      timeframe,
      start,
      name,
      phoneEstimate,
      emailEstimate,
      messageEstimate,
      isSubscriber,
      hasDiscount,
    } = formFildsData;

    let servicesEstimate;

    name.value = name.value.replace(/\s+/g, ' ');
    phoneEstimate.value = phoneEstimate.value.replace(/\s+/g, ' ');
    messageEstimate.value = messageEstimate.value.replace(/\s+/g, ' ');
    if (services.value) servicesEstimate = services.value.join(', ');

    const [missedField] = checkRequiredEstimateFields(formFildsData);

    if (missedField) {
      res.send(missedField);

      return;
    }

    if (!formatValidation.validate({ min: 3, max: 25 }, name.value)) {
      name.error = true;

      res.send({
        errorField: { name },
        status: 'Wrong name length',
      });
      return;
    }

    if (!formatValidation.validate({ type: 'email' }, emailEstimate.value)) {
      emailEstimate.error = true;

      res.send({
        errorField: { emailEstimate },
        status: 'Wrong email address',
      });
      return;
    }
    if (!formatValidation.validate({ max: 25 }, phoneEstimate.value)) {
      phoneEstimate.error = true;

      res.send({
        errorField: { phoneEstimate },
        status: 'Wrong phone length',
      });
      return;
    }
    if (!formatValidation.validate({ max: 800 }, messageEstimate.value)) {
      messageEstimate.error = true;

      res.send({
        errorField: { messageEstimate },
        status: 'Wrong message length',
      });
      return;
    }

    let attachment;
    try {
      attachment = checkAttachment(req.files);
    } catch(e) {
      res.send({ status: e.message });
    }

    const html = `
      <p>${name.value}</p>
      <p>Email: ${emailEstimate.value}</p>
      <p>Phone: ${phoneEstimate.value}</p>
      <p>Stage: ${stage.value}</p>
      <p>Services: ${servicesEstimate}</p>
      <p>Require PM/Product manager: ${pm.value}</p>
      <p>Budget: ${budget.value}</p>
      <p>Timeframe: ${timeframe.value}</p>
      <p>Start: ${start.value}</p>
      <p>I want to use a subscriber discount: ${hasDiscount ? 'Checked' : 'Unchecked'}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${messageEstimate.value}</div>
    `;

    const mailOptions = {
      from: 'no-reply@keenethics.com',
      //to: 'business@keenethics.com, oleh.romanyuk@keenethics.com',
      to: 'vitaliy.melnychenko@keenethics.com',
      subject: `New message from ${emailEstimate.value}`,
      html,
      attachments: [
        attachment
      ]
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        throw err;
      }
      res.send({
        errorField: {},
        status: 'Message sent',
      });
    });

    const hubSpotParameters = {
      name: name.value,
      email: emailEstimate.value,
      phone: phoneEstimate.value.toString(),
      isSubscriber: !!isSubscriber,
      hasDiscount: !!hasDiscount,
    };

    //sendContactToHubSpot(hubSpotParameters);
  });
  server.post('/careers', (req, res) => {
    const {
      name,
      email,
      position,
      message,
    } = req.body;

    name.value = name.value.replace(/\s+/g, ' ');
    message.value = message.value.replace(/\s+/g, ' ');

    if (!formatValidation.validate({ min: 3, max: 25 }, name.value)) {
      name.error = true;

      res.send({
        errorField: { name },
        status: 'Wrong name length',
      });
      return;
    }
    if (!formatValidation.validate({ type: 'email' }, email.value)) {
      email.error = true;

      res.send({
        errorField: { email },
        status: 'Wrong email address',
      });
      return;
    }
    if (!formatValidation.validate({ min: 3, max: 60 }, position.value)) {
      res.send('Wrong position length');
      return;
    }
    if (!formatValidation.validate({ min: 3, max: 800 }, message.value)) {
      message.error = true;

      res.send({
        errorField: { message },
        status: 'Wrong message length',
      });
      return;
    }

    const html = `
      <p>${name.value} - ${email.value}</p>
      <p>Position: ${position.value}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${message.value}</div>
    `;
    const mailOptions = {
      from: 'no-reply@keenethics.com',
      to: 'careers@keenethics.com',
      subject: `Hiring: ${position.value}`,
      html,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        throw err;
      }
      res.send({
        errorField: {},
        status: 'Message sent',
      });
    });
  });
  server.get('/api/posts', (req, res) => {
    const sortedPosts = postsDatePair.sort((a, b) => b.createdAt - a.createdAt);

    const result = sortedPosts
      .map((file) => {
        const fileStat = fs.existsSync(path.resolve(__dirname, `../posts/${file.filename}`));
        if (!fileStat) { console.error(`File ${file.filename} does not exist!`); return null; }
        const text = fs.readFileSync(path.resolve(__dirname, `../posts/${file.filename}`), 'utf8');
        const author = (/Author: (.*?)\n/g).exec(text)[1];
        const title = (/Title: (.*?)\n/g).exec(text)[1];
        const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
        const categoriesString = (/Categories: (.*?)\n/g).exec(text)[1];
        const categories = categoriesString.split(', ');
        let image = (/Preview image: (.*?)\n/g).exec(text);
        const date = file.createdAt;

        if (image && image[1]) {
          image = image[1];
        } else {
          image = '/static/images/astronauts.jpg';
        }

        return {
          title,
          subtitle,
          author,
          href: file.filename.slice(0, -3),
          image,
          date,
          categories,
        };
      })
      .filter((v) => v !== null);
    res.send(result);
  });
  server.get('/api/posts/:name', (req, res) => {
    if (req.params && req.params.name) {
      fs.stat(path.resolve(__dirname, `../posts/${req.params.name}.md`), (err) => {
        if (err == null) {
          const filename = `${req.params.name}.md`;
          const sortedPosts = postsDatePair
            .sort((a, b) => b.createdAt - a.createdAt);


          const postIndex = sortedPosts.map(({ fln }) => fln).indexOf(filename);
          const hrefToPreviousPost = postIndex <= 0 ? '' : `${sortedPosts[postIndex - 1].filename.replace('.md', '')}`;
          const hrefToNextPost = postIndex >= (sortedPosts.length - 1) ? '' : `${sortedPosts[postIndex + 1].filename.replace('.md', '')}`;
          const text = fs.readFileSync(path.resolve(__dirname, `../posts/${req.params.name}.md`), 'utf8');

          const content = text.substring(text.indexOf('\n\n'));
          const author = (/Author: (.*?)\n/g).exec(text)[1];
          const title = (/Title: (.*?)\n/g).exec(text)[1];
          const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
          const metaTitle = (/Meta title: (.*?)\n/g).exec(text)[1];
          const metaDescription = (/Meta description: (.*?)\n/g).exec(text)[1];
          let image = (/Preview image: (.*?)\n/g).exec(text);

          let date = sortedPosts[postIndex].createdAt;
          const newDate = (/New Date: (.*?)\n/g).exec(text);

          if (newDate && newDate[1]) {
            date = newDate[1];
          }

          if (image && image[1]) {
            image = image[1];
          } else {
            image = '/static/images/astronauts.jpg';
          }

          const post = {
            title,
            subtitle,
            metaTitle,
            metaDescription,
            author,
            href: req.params.name.slice(3, -3),
            image,
            date,
            content,
            hrefToPreviousPost,
            hrefToNextPost,
          };

          res.send(post);
        } else if (err.code === 'ENOENT') {
          res.status(404).send({ statusCode: 404 });
        } else {
          res.status(500).send({ statusCode: 500 });
        }
      });
    }
  });

  server.get('/blog/:name', (req, res) => app.render(req, res, '/post', { name: req.params.name }));

  server.post('/blog/subscribe', (req, res) => {
    const { email } = req.body;

    if (!formatValidation.validate({ type: 'email' }, email.value)) {
      email.error = true;

      return res.send({
        errorField: { email },
        status: 'Wrong email address',
      });
    }

    const companyEmailContent = `
      <p>New subscriber</p>
      <p>${email.value}</p>
    `;
    const companyEmailOptions = {
      from: 'no-reply@keenethics.com',
      to: 'business@keenethics.com',
      subject: `Blog subscriber ${email.value}`,
      html: companyEmailContent,
    };

    transporter.sendMail(companyEmailOptions, (error) => {
      if (error) {
        throw error;
      }

      const subscriberEmailContent = `
        <p>Thank you for subscribing! You will receive our thought-provoking newsletter twice a month.
        The topics we cover include technology, productivity, and business.</p>
        <p>You can also request a topic to be covered by writing directly to us at business@keenethics.com</p>
        <p>P.S. Now and then, you will receive different promo codes for our services.
        They may provide 10% off your future software project or quality assurance for free.
        So don't miss out on the opportunity!</p>
      `;
      const subscriberEmailOptions = {
        from: 'no-reply@keenethics.com',
        to: `${email.value}`,
        subject: 'Keenethics blog subscribing',
        html: subscriberEmailContent,
      };

      transporter.sendMail(subscriberEmailOptions, (err) => {
        if (err) {
          throw err;
        }

        res.send({
          errorField: {},
          status: 'Email sent to company and subscriber',
        });
      });
    });

    return res.sendStatus(200);
  });

  server.get('/post-preview/:name', (req, res) => app.render(req, res, '/post', { name: req.params.name, preview: true }));

  server.get('/api/astronauts', async (req, res) => {
    const team = await getTeam();
    res.send(JSON.stringify(team));
  });

  server.get('/api/careers', async (req, res) => {
    const careers = await getCareers();
    res.send(JSON.stringify(careers));
  });

  server.get('/api/location', async (req, res) => {
    try {
      const ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
      const location = await iplocation(ip);
      res.status(200).json({ location: location });
    } catch(e) {
      res.status(400).json({ location: ""});
    }
  });

  server.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({});
    }
    const file = req.files.file;
    console.log(file);
    file.mv(`${__dirname}/../static/upload/${file.name}`, err => {
      if (err) {
        console.log(err);
        return res.status(500).json({});
      }
    })
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(server.get('port'), (err) => {
    if (err) {
      throw err;
    }
  });
}).catch(console.error);
