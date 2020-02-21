const path = require('path');
const {
  messageFromIrene,
  messageFromPaul,
  messageFromJean,
} = require('./autoReplyMails');

module.exports = (country, type, data) => {
  const {
    email,
  } = data;

  let from = 'irene@keenethics.com';
  let html = '';

  switch (country) {
    case 'NL':
      from = 'paul.van.workum@keenethics.com';
      html = messageFromPaul(type, data);
      break;
    case 'US':
      from = 'jean.marc.arsan@keenethics.com';
      html = messageFromJean(type, data);
      break;
    default:
      from = 'irene@keenethics.com';
      html = messageFromIrene(type, data);
  }

  return {
    from,
    to: email,
    bcc: 'business@keenethics.com',
    subject: 'Thank you for being in touch with KeenEthics! I am happy to deliver on your request',
    html,
    attachments: [
      {
        filename: 'keenethics-logo.svg',
        path: path.resolve(__dirname, '../public/static/images/keenethics.png'),
        cid: 'keenethics',
      },
    ],
  };
};
