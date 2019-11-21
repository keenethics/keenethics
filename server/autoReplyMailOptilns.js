const { messageFromMax, messageFromPaul } = require('./autoReplyMails')();

module.exports = (country, name, email) => {
  return {
    from: country === 'NL' ? 'paul.van.workum@keenethics.com' : 'maxim.savonin@keenethics.com',
    to: email,
    subject: 'Thank you for getting in touch! My KeenEthics team is busy delivering on your request.',
    html: country === 'NL' ? messageFromPaul(name) : messageFromMax(name),
    attachments: [
      {
        filename: 'keenethics-logo.svg',
        path: `${__dirname}/../static/images/keenethics.png`,
        cid: 'keenethics'
      }
    ]
  }
}