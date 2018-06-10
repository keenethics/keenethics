const express = require('express');
const expressUncapitalize = require('express-uncapitalize');
const fs = require('fs');
const path = require('path');
const next = require('next');
const fetch = require('node-fetch');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const formatValidation = require('string-format-validation');
const { mailgunAuth, hubSpot } = require('./config');
const { postsDatePair } = require('./postsort.config');

const Router = require('./routes').Router;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handle = app.getRequestHandler();

const checkStatus = response => (response.ok ? response.json() : Promise.reject(response.json()));

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
    .then(checkStatus)
    .catch(error => console.log('Hubspot request error: ', error));
};

app.prepare().then(() => {
  const server = express();
  let transporter = { sendMail: (mail) => { console.warn('Can\'t send email: Mailgun not initialized properly.', mail); } };
  if (mailgunAuth.auth.api_key) {
    transporter = nodemailer.createTransport(mailgun(mailgunAuth));
  }

  server.set('port', process.env.PORT || 3000);

  server.use(bodyParser.json());
  server.use(expressUncapitalize());
  server.use(express.static('public'));
  server.use(bodyParser.urlencoded({ extended: true }));

  Router.forEachPattern((page, pattern, defaultParams) => (
    server.get(pattern, (req, res) => (
      app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
    ))
  ));

  server.post('/contact', (req, res) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      message,
    } = req.body;

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
    if (!formatValidation.validate({ min: 3, max: 800 }, message.value)) {
      message.error = true;

      res.send({
        errorField: { message },
        status: 'Wrong message length',
      });
      return;
    }

    const html = `
      <p>${firstname.value} ${lastname.value}</p>
      <p>Email: ${email.value}</p>
      <p>Phone: ${phone.value}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${message.value}</div>
    `;
    const mailOptions = {
      from: 'no-reply@keenethics.com',
      to: 'founders@keenethics.com',
      subject: `New message from ${email.value}`,
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

    const hubSpotParameters = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value.toString(),
    };

    sendContactToHubSpot(hubSpotParameters);
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
  server.get('/posts', (req, res) => {
    const sortedPosts = postsDatePair.sort((a, b) => b.createdAt - a.createdAt);
    res.send(sortedPosts
      .map((file) => {
        const fileStat = fs.existsSync(path.resolve(__dirname, `posts/${file.filename}`));
        if (!fileStat) { console.error(`File ${file.filename} does not exist!`); return null; }
        const text = fs.readFileSync(path.resolve(__dirname, `posts/${file.filename}`), 'utf8');
        const author = (/Author: (.*?)\n/g).exec(text)[1];
        const title = (/Title: (.*?)\n/g).exec(text)[1];
        const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
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
        };
      })
      .filter(v => v !== null));
  });
  server.get('/post/:name', (req, res) => {
    if (req.params && req.params.name) {
      fs.stat(path.resolve(__dirname, `posts/${req.params.name}.md`), (err) => {
        if (err == null) {
          const filename = `${req.params.name}.md`;
          const sortedPosts = postsDatePair.sort((a, b) => b.createdAt - a.createdAt).map(post => post.filename);
          const postIndex = sortedPosts.indexOf(filename);
          const hrefToPreviousPost = postIndex <= 0 ? '' : `${sortedPosts[postIndex - 1].replace('.md', '')}`;
          const hrefToNextPost = postIndex >= (sortedPosts.length - 1) ? '' : `${sortedPosts[postIndex + 1].replace('.md', '')}`;
          const text = fs.readFileSync(path.resolve(__dirname, `posts/${req.params.name}.md`), 'utf8');

          const content = text.substring(text.indexOf('\n\n'));
          const author = (/Author: (.*?)\n/g).exec(text)[1];
          const title = (/Title: (.*?)\n/g).exec(text)[1];
          const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
          const metaTitle = (/Meta title: (.*?)\n/g).exec(text)[1];
          const metaDescription = (/Meta description: (.*?)\n/g).exec(text)[1];
          let image = (/Preview image: (.*?)\n/g).exec(text);
          const date = req.params.name.split('-')[0];

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

  server.get('*', (req, res) => handle(req, res));

  server.listen(server.get('port'), (err) => {
    if (err) {
      throw err;
    }
  });
});
