const path = require('path');
const { messageFromMax, messageFromPaul, messageFromJean } = require('./autoReplyMails');


module.exports = (country, name, email) => {
  const mailAuthor = {
    NL: 'paul.van.workum@keenethics.com',
    US: 'jean.marc.arsan@keenethics.com',
    UA: 'maxim.savonin@keenethics.com',
  };
  const html = {
    NL: messageFromPaul(name),
    US: messageFromJean(name),
    UA: messageFromMax(name),
  };
  return {
    from: mailAuthor[country] ? mailAuthor[country] : mailAuthor.UA,
    to: email,
    bcc: 'business@keenethics.com',
    subject: 'Thank you for getting in touch! My KeenEthics team is busy delivering on your request.',
    html: html[country] ? html[country] : html.UA,
    attachments: [
      {
        filename: 'keenethics-logo.svg',
        path: path.resolve(__dirname, '../public/static/images/keenethics.png'),
        cid: 'keenethics',
      },
    ],
  };
};
