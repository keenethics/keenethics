// const formatValidation = require('string-format-validation');

// const transporter = require('../../lib/mailgun');

// const checkAttachment = require('../../server/attachment-validator');
// const autoReplyMailOptions = require('../../server/autoReplyMailOptions');

export default (req, res) => {
  if (req.method !== 'POST') {
    res.sendStatus(405);
  }
};
