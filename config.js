const mailgunAuth = {
  auth: {
    api_key: process.env.MAIL_API_KEY,
    domain: process.env.MAIL_DOMAIN,
  },
};

module.exports.mailgunAuth = mailgunAuth;

const hubSpot = {
  formId: process.env.HUB_SPOT_FORM_ID,
  userId: process.env.HUB_SPOT_USER_ID,
};

module.exports.hubSpot = hubSpot;
