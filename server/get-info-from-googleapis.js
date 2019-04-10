const { google } = require('googleapis');
const { spreadSheet } = require('./config');
const _ = require('lodash');

const TEAM_SHEET_ID = spreadSheet.id;
const CREDS_FILE = spreadSheet.securityFile;
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];
const TEAM_RANGE = spreadSheet.teamRange;
const CAREERS_RANGE = spreadSheet.careersRange;

const ranges = [TEAM_RANGE, CAREERS_RANGE];

const TITLE_COLUMN_INDEX = 0;

let dataStore = null;
let updateTime = null;
const timeToLive = 10 * 60 * 1000; // 10min

const arrayOfArraysToCollection = (arr) => {
  const properties = arr[TITLE_COLUMN_INDEX];
  return arr.slice(TITLE_COLUMN_INDEX + 1)
    .map(v => _.fromPairs(properties.map((property, index) => ([property, v[index]]))));
};

const isValidData = () => {
  if (!dataStore || !updateTime) {
    return false;
  }

  const diffTime = +new Date() - updateTime;
  return diffTime < timeToLive;
};

const updateData = (data) => {
  dataStore = data;
  updateTime = +new Date();
};

const getSheetValues = (valueRanges, rangeName) =>
  valueRanges.find(v => new RegExp(rangeName).test(v.range)).values;

const getData = async () => {
  if (isValidData()) {
    return Promise.resolve(dataStore);
  }

  try {
    const client = await google.auth.getClient({
      keyFile: CREDS_FILE,
      scopes,
    });

    const sheets = google.sheets('v4');

    const table = await sheets.spreadsheets.values.batchGet({
      auth: client,
      spreadsheetId: TEAM_SHEET_ID,
      ranges,
    });


    const team = getSheetValues(table.data.valueRanges, TEAM_RANGE);
    const careers = getSheetValues(table.data.valueRanges, CAREERS_RANGE);

    const data = {
      team: arrayOfArraysToCollection(team),
      careers: arrayOfArraysToCollection(careers),
    };

    updateData(data);
    return Promise.resolve(dataStore);
  } catch (e) {
    console.error(e);
    return null;
  }
};

getData();

const getTeam = async () => {
  const d = await getData();
  return d.team;
};
const getCareers = async () => {
  const d = await getData();
  return d.careers;
};

module.exports = {
  getTeam,
  getCareers,
};
