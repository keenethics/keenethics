const express = require('express');
const fs = require('fs');
const path = require('path');
const next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
const formatValidation = require('string-format-validation');

const Router = require('./routes').Router;

const mailgunAuth = {
  auth: {
    api_key: 'key-75c9dfefec6348ace59475be3d83c186',
    domain: 'sandbox3ea896b1438d434ea69663a733b9d81b.mailgun.org',
  },
};

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const transporter = nodemailer.createTransport(mailgun(mailgunAuth));

  server.set('port', process.env.PORT || 3000);

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  Router.forEachPattern((page, pattern, defaultParams) => (
    server.get(pattern, (req, res) => (
      app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
    ))
  ));

  server.post('/contact', (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body;

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
      from: 'sergey.gornostaev@keenethics.com',
      to: 'accounts@gornostaev.pro',
      subject: 'New contact',
      html,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        throw err;
      }

      res.send({
        status: 'Mail sent',
      });
    });
  });
  server.post('/careers', (req, res) => {
    const { firstname, lastname, position, message } = req.body;

    firstname.value = firstname.value.replace(/\s+/g, ' ');
    lastname.value = lastname.value.replace(/\s+/g, ' ');
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
      <p>${firstname.value} ${lastname.value}</p>
      <p>Position: ${position.value}</p>
      <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">${message.value}</div>
    `;
    const mailOptions = {
      from: 'sergey.gornostaev@keenethics.com',
      to: 'accounts@gornostaev.pro',
      subject: `Hiring: ${position.value}`,
      html,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        throw err;
      }

      res.send('Mail sent');
    });
  });
  server.get('/posts', (req, res) => {
    fs.readdir(path.resolve(__dirname, 'posts'), 'utf8', (err, files) => {
      if (err) throw err;

      const posts = [];

      files.forEach((file) => {
        const text = fs.readFileSync(path.resolve(__dirname, `posts/${file}`), 'utf8');

        const author = (/Author: (.*?)\n/g).exec(text)[1];
        const title = (/Title: (.*?)\n/g).exec(text)[1];
        const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
        const image = (/Preview image: (.*?)\n/g).exec(text)[1];
        const date = file.split('-')[0];

        posts.push({
          title,
          subtitle,
          author,
          href: file.slice(0, -3),
          image,
          date,
        });
      });

      res.send(posts);
    });
  });
  server.get('/post/:name', (req, res) => {
    const text = fs.readFileSync(path.resolve(__dirname, `posts/${req.params.name}.md`), 'utf8');

    const content = text.substring(text.indexOf('\n\n'));
    const author = (/Author: (.*?)\n/g).exec(text)[1];
    const title = (/Title: (.*?)\n/g).exec(text)[1];
    const subtitle = (/Subtitle: (.*?)\n/g).exec(text)[1];
    const image = (/Preview image: (.*?)\n/g).exec(text)[1];
    const date = req.params.name.split('-')[0];

    const post = {
      title,
      subtitle,
      author,
      href: req.params.name.slice(3, -3),
      image,
      date,
      content,
    };

    res.send(post);
  });
  server.get('*', (req, res) => handle(req, res));

  server.listen(server.get('port'), (err) => {
    if (err) {
      throw err;
    }
  });
});
