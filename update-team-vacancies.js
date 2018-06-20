const { google } = require('googleapis');
const path = require('path');

const TEAM_SHEET_ID = '1CF43Hi_vxS-kk2WGQ0km7rUEm5IMbTuD9QoFfsWW7B4';
const TEAM_RANGE = 'Sheet1';
const CREDS_FILE = 'dauntless-theme-207811-a063c4c9e36d.json';
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];

async function runSample() {
  const client = await google.auth.getClient({
    keyFile: path.join(__dirname, CREDS_FILE),
    scopes,
  });

  const drive = google.drive({
    version: 'v2',
    auth: client,
  });

  const sheets = google.sheets('v4');

  const table = await sheets.spreadsheets.values.get({
    auth: client,
    spreadsheetId: TEAM_SHEET_ID,
    range: TEAM_RANGE,
  });

  console.log(table.data);

  const res = await drive.files.list();
  // console.log(res.data);
}

runSample().catch(console.error);
