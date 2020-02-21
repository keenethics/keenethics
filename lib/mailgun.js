const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const { mailgunAuth } = require('../server/config');

const mailgunInstance = mailgun(mailgunAuth);
const transporter = nodemailer.createTransport(mailgunInstance);

exports.sendMail = async (mail) => {
  await transporter.sendMail(mail);
};
