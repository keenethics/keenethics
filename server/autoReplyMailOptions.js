const path = require('path');
const {
  messageFromIlona,
  messageFromPaul,
  // messageFromJean,
} = require('./autoReplyMails');

module.exports = (country, type, data) => {
  const {
    email,
  } = data;

  let from = 'ilona@keenethics.com';
  let html = '';
  let replyTo = '';

  switch (country) {
    case 'NL':
      from = 'Paul from KeenEthics paul.van.workum@keenethics.com';
      html = messageFromPaul(type, data);
      replyTo = 'paul.van.workum@keenethics.com';
      break;
    // case 'US':
    //   from = 'Jean-Marc from KeenEthics jean.marc.arsan@keenethics.com';
    //   html = messageFromJean(type, data);
    //   replyTo = 'jean.marc.arsan@keenethics.com';
    //   break;
    default:
      from = 'Ilona from KeenEthics ilona@keenethics.com';
      html = messageFromIlona(type, data);
      replyTo = 'ilona@keenethics.com';
  }

  return {
    from,
    to: email,
    cc: ['business@keenethics.com', replyTo, replyTo === 'ilona@keenethics.com' ? '' : 'ilona@keenethics.com'],
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
