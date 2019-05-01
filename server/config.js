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

const spreadSheet = {
  id: process.env.TEAM_SHEET_ID, // sheet id
  securityFile: process.env.SECURITY_SHEET_FILE, // absolute path
  teamRange: process.env.SHEET_TEAM_RANGE || 'team', // example: 'team!A1:Z998'
  careersRange: process.env.SHEET_CAREERS_RANGE || 'careers', // example: 'careers!A1:Z999'
};

module.exports.spreadSheet = spreadSheet;
