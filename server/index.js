const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const dotenv = require('dotenv-safe');
require('isomorphic-fetch');

const Sentry = require('@sentry/node');

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
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const formatValidation = require('string-format-validation');
const fileUpload = require('express-fileupload');
const { mailgunAuth, hubSpot } = require('./config');
const { getTeam, getCareers } = require('./get-info-from-googleapis');
const { checkRequiredEstimateFields } = require('./validator');
const checkAttachment = require('./attachment-validator');
const autoReplyMailOptions = require('./autoReplyMailOptions');
const thanksMessageFromUser = require('./autoReplyReferralForm');
const { bookingMeeting, getAllCalendarEvents } = require('./calendar');

const dev = NODE_ENV !== 'production';
const DEFAULT_PORT = 3000;
const isAnalyticsActive = Boolean(process.env.IS_ANALYTICS_ACIVE);

const app = next({ dev });

const handle = app.getRequestHandler();

if (!isAnalyticsActive) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

const sendContactToHubSpot = (hubSpotParameters) => {
  const fields = Object.keys(hubSpotParameters)
    .map((name) => ({ name, value: hubSpotParameters[name] }));
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields,
    }),
  };
  const { userId, formId } = hubSpot;
  const hubUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${userId}/${formId}`;

  fetch(hubUrl, options)
    .then((res) => res.text())
    .then((text) => {
      try {
        const parsedResponse = JSON.parse(text);
        return Promise.resolve(parsedResponse);
      } catch (err) {
        throw new Error(text);
      }
    })
    .catch((error) => console.error('Hubspot request error: ', error));
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
  server.use(fileUpload());

  server.post('/api/free-busy', async (req, res) => {
    try {
      const { selectedDate } = req.body;
      const events = await getAllCalendarEvents(selectedDate);
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json([]);
    }
  });

  server.post('/contact', (req, res) => {
    const {
      firstname,
      lastname,
      email,
      phone,
      message,
      isSubscriber,
      selectedCountry,
    } = JSON.parse(req.body.data);

    firstname.value = firstname.value.replace(/\s+/g, ' ');
    lastname.value = lastname.value.replace(/\s+/g, ' ');
    phone.value = phone.value.replace(/\s+/g, ' ');
    message.value = message.value.replace(/\s+/g, ' ');

    if (!formatValidation.validate({ min: 3, max: 25 }, firstname.value)) {
      res.send({
        value: firstname.value,
        errorField: 'firstname',
        error: true,
        status: 'Wrong name length, it must be from 3 to 25 characters',
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
      res.send({
        value: email.value,
        errorField: 'email',
        error: true,
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
    if (!formatValidation.validate({ min: 3, max: 10000 }, message.value)) {
      res.send({
        value: message.value,
        errorField: 'message',
        error: true,
        status: 'Wrong message length, it must be from 3 to 10000 characters',
      });
      return;
    }

    let attachment;
    try {
      attachment = checkAttachment(req.files);
    } catch (e) {
      res.send(e);
      return;
    }
    const countrys = {
      NL: 'Netherlands',
      US: 'USA',
      UA: 'Ukraine',
    };

    const html = `
      <p>${firstname.value}</p>
      <p>Selected country: ${countrys[selectedCountry] ? countrys[selectedCountry] : countrys.UA}</p>
      <p>Email: ${email.value}</p>
      <p>I want to join KeenEthics in a social project: ${isSubscriber ? 'Checked' : 'Unchecked'}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${message.value}</div>
    `;
    const mailOptions = {
      from: 'no-reply@keenethics.com',
      to: 'business@keenethics.com',
      subject: `New message from ${email.value}`,
      html,
      attachments: [
        attachment,
      ],
    };

    transporter.sendMail(
      autoReplyMailOptions(
        selectedCountry,
        'contacts',
        {
          name: firstname.value,
          email: email.value,
          message: message.value,
        },
      ),
      (e) => {
        if (e) {
          if (isAnalyticsActive) Sentry.captureException(e);
          return res.send({
            value: email.value,
            errorField: 'email',
            error: true,
            status: 'Wrong email address',
          });
        }
        transporter.sendMail(mailOptions, (err) => {
          if (err) {
            if (isAnalyticsActive) Sentry.captureException(err);
            return res.status(400).send(err);
          }
          return res.send({
            errorField: {},
            status: 'Message sent',
          });
        });
      },
    );

    const hubSpotParameters = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value.toString(),
      subscription_status: isSubscriber ? 'Subscribed' : 'Unsubscribed',
    };

    sendContactToHubSpot(hubSpotParameters);
  });
  server.post('/estimate', (req, res) => {
    const formFildsData = JSON.parse(req.body.data);
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
      selectedCountry,
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
      res.send({
        value: name.value,
        errorField: 'name',
        error: true,
        status: 'Wrong name length, it must be from 3 to 25 characters',
      });
      return;
    }

    if (!formatValidation.validate({ type: 'email' }, emailEstimate.value)) {
      res.send({
        value: emailEstimate.value,
        errorField: 'email',
        error: true,
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
    if (!formatValidation.validate({ min: 3, max: 10000 }, messageEstimate.value)) {
      res.send({
        value: messageEstimate.value,
        errorField: 'message',
        error: true,
        status: 'Wrong message length, it must be from 3 to 10000 characters',
      });
      return;
    }

    let attachment;
    try {
      attachment = checkAttachment(req.files);
    } catch (e) {
      res.send(e);
      return;
    }
    const countrys = {
      NL: 'Netherlands',
      US: 'USA',
      UA: 'Ukraine',
    };

    const html = `
      <p>${name.value}</p>
      <p>Selected country: ${countrys[selectedCountry] ? countrys[selectedCountry] : countrys.UA}</p>
      <p>Email: ${emailEstimate.value}</p>
      <p>Stage: ${stage.value}</p>
      <p>Services: ${servicesEstimate}</p>
      <p>Require PM/Product manager: ${pm.value}</p>
      <p>Budget: ${budget.value}</p>
      <p>Timeframe: ${timeframe.value}</p>
      <p>Start: ${start.value}</p>
      <p>I want to join KeenEthics in a social project: ${hasDiscount ? 'Checked' : 'Unchecked'}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${messageEstimate.value}</div>
    `;

    const mailOptions = {
      from: 'no-reply@keenethics.com',
      to: 'business@keenethics.com',
      subject: `New message from ${emailEstimate.value}`,
      html,
      attachments: [
        attachment,
      ],
    };

    transporter.sendMail(
      autoReplyMailOptions(
        selectedCountry,
        'estimate',
        {
          name: name.value,
          email: emailEstimate.value,
          stage: stage.value,
          services: servicesEstimate,
          pm: pm.value,
          budget: budget.value,
          timeframe: timeframe.value,
          start: start.value,
          message: messageEstimate.value,
        },
      ),
      (e) => {
        if (e) {
          if (isAnalyticsActive) Sentry.captureException(e);
          return res.send({
            value: emailEstimate.value,
            errorField: 'email',
            error: true,
            status: 'Wrong email address',
          });
        }

        transporter.sendMail(mailOptions, (err) => {
          if (err) {
            if (isAnalyticsActive) Sentry.captureException(err);
            return res.status(400).send(err);
          }
          return res.send({
            errorField: {},
            status: 'Message sent',
          });
        });
      },
    );

    const hubSpotParameters = {
      name: name.value,
      email: emailEstimate.value,
      phone: phoneEstimate.value.toString(),
      isSubscriber: !!isSubscriber,
      hasDiscount: !!hasDiscount,
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

  // server.get('/blog/:name', (req, res) => app.render(req, res, '/blog', { name: req.params.name }));

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

        return res.send({
          errorField: {},
          status: 'Email sent to company and subscriber',
        });
      });
    });

    return res.sendStatus(200);
  });

  server.post('/referral-program-send-email', (req, res) => {
    const {
      country,
      selectedDate,
      selectedTime,
      name,
      email,
      phone,
    } = JSON.parse(req.body.data);

    if (!formatValidation.validate({ min: 3, max: 25 }, name)) {
      res.send({
        error: true,
        status: 'Wrong name length, it must be from 3 to 25 characters',
      });
      return;
    }
    if (!formatValidation.validate({ type: 'email' }, email)) {
      res.send({
        error: true,
        status: 'Wrong email address',
      });
      return;
    }
    if (!formatValidation.validate({ min: 3, max: 25 }, phone)) {
      res.send({
        error: true,
        status: 'Wrong phone length',
      });
      return;
    }
    if (!country) {
      res.send({
        error: true,
        status: 'Select you country',
      });
      return;
    }
    if (!selectedDate) {
      res.send({
        error: true,
        status: 'Select date',
      });
      return;
    }
    if (!selectedTime) {
      res.send({
        error: true,
        status: 'Select time',
      });
      return;
    }

    const mailOptions = {
      from: 'Max from KeenEthics business@keenethics.com',
      to: email,
      subject: `${name}, thank you for being in touch with KeenEthics!
       I am happy
       to introduce you to our referral program.`,
      html: thanksMessageFromUser(JSON.parse(req.body.data)),
      attachments: [
        {
          filename: 'keenethics-logo.svg',
          path: path.resolve(__dirname, '../public/static/images/keenethics.png'),
          cid: 'keenethics',
        },
      ],
    };

    transporter.sendMail(mailOptions, () => {
      try {
        bookingMeeting(JSON.parse(req.body.data));
        res.send({
          error: false,
          status: 'Message sent',
        });
      } catch (err) {
        res.send({
          error: true,
          status: 'Error Creating Calender Event',
        });
      }
    });
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

  server.get('/api/update-sitemap', async (req, res) => {
    try {
      if (req.query.key !== process.env.REACT_APP_ACCESS_TOKEN.toLocaleLowerCase()) throw new Error('Permission denied');
      await exec('node generate-sitemap.js');
      res.status(200).send('Sitemap updated');
    } catch (err) {
      res.status(403).send(err.message);
    }
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(server.get('port'), (err) => {
    if (err) {
      throw err;
    }
  });
}).catch(console.error);
