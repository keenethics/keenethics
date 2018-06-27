const { google } = require('googleapis');
const path = require('path');

//FIXME: export to env variables
const TEAM_SHEET_ID = '18PXulnsVlgrHFHh7YLz6bkxypTlir8tZLeZWHNiGiyI';
const ranges = ['team', 'careers'];
const CREDS_FILE = 'dauntless-theme-207811-a063c4c9e36d.json';
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];
const TIME_TO_LIVE = 30 * 60 * 1000;


// Because we get data from Google Spreadsheets as array of arrays
const arrayOfArraysToCollection = (arr) => {
  const INDEX_PROPERTIES_ROW = 0;
  const properties = arr[INDEX_PROPERTIES_ROW];
  const values = arr.slice(INDEX_PROPERTIES_ROW + 1);
  return values.map((v) => {
    const obj = {};
    properties.forEach((property, index) => {
      obj[property] = v[index];
    });
    return obj;
  });
};

let teamCache = null;
let lastUpdateTime = null;
const isFreshData = (updateTime, timeToLive = TIME_TO_LIVE) => {
  const diffBetweenLastUpdateAndNow = +new Date() - updateTime;
  return updateTime && (diffBetweenLastUpdateAndNow < timeToLive);
};

async function getTeam() {
  if (isFreshData(lastUpdateTime)) {
    return Promise.resolve(teamCache);
  }


  try {
    const client = await google.auth.getClient({
      keyFile: path.join(__dirname, CREDS_FILE),
      scopes,
    });

    const sheets = google.sheets('v4');

    const table = await sheets.spreadsheets.values.batchGet({
      auth: client,
      spreadsheetId: TEAM_SHEET_ID,
      ranges: ranges
    });


    let { values } = table.data;
    // Filter out empty lines
    values = values.filter(v => v.length > 3);
    teamCache = arrayOfArraysToCollection(values);
    lastUpdateTime = +new Date();
    return Promise.resolve(teamCache);
  } catch (e) {
    console.error( e );
  }
}


module.exports = getTeam;
