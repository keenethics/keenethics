const { google } = require('googleapis');
const _ = require('lodash');
const memoize = require('lodash/memoize');
const { spreadSheet } = require('./config');

const TEAM_SHEET_ID = spreadSheet.id;
const CREDS_FILE = spreadSheet.securityFile;
const googleScopes = ['https://www.googleapis.com/auth/drive.readonly'];
const TEAM_RANGE = spreadSheet.teamRange;
const CAREERS_RANGE = spreadSheet.careersRange;

const ranges = [TEAM_RANGE, CAREERS_RANGE];

const TEN_MINUTES = 10 * 60 * 1000;
const TITLE_COLUMN_INDEX = 0;

const arrayOfArraysToCollection = (arr) => {
  const properties = arr[TITLE_COLUMN_INDEX];
  return arr.slice(TITLE_COLUMN_INDEX + 1)
    .map(v => _.fromPairs(properties.map((property, index) => ([property, v[index]]))));
};

const getSheetValues = (valueRanges, rangeName) => valueRanges.find(
  v => new RegExp(rangeName).test(v.range),
).values;

const getClient = async (keyFile, scopes) => google.auth.getClient({
  keyFile,
  scopes,
});

let cashedSheetData = [];

class CustomMap extends Map {
  async get(key) {
    if (!super.has(key)) {
      return;
    }

    const result = await super.get(key);

    // eslint-disable-next-line
    if (Date.now() - result._date >= TEN_MINUTES) {
      super.delete(key);
    }

    // eslint-disable-next-line
    return result;
  }
}

memoize.Cache = CustomMap;

const getSheets = memoize(async (spreadsheetId) => {
  // TEAM_SHEET_ID
  const client = await getClient(CREDS_FILE, googleScopes);

  const sheets = google.sheets('v4');

  const table = await sheets.spreadsheets.values.batchGet({
    auth: client,
    spreadsheetId,
    ranges,
  });

  const result = _.get(table, 'data', {});
  // eslint-disable-next-line
  result._date = Date.now();

  return result;
});

const getData = async (rangeName, sheetId) => {
  try {
    const sheetData = await getSheets(sheetId);

    cashedSheetData = sheetData;

    const data = getSheetValues(sheetData.valueRanges, rangeName);

    return arrayOfArraysToCollection(data);
  } catch (err) {
    console.error(err);

    const cashedData = getSheetValues(cashedSheetData.valueRanges, rangeName);
    return arrayOfArraysToCollection(cashedData);
  }
};

getData(TEAM_RANGE, TEAM_SHEET_ID);

const getTeam = async () => getData(TEAM_RANGE, TEAM_SHEET_ID);
const getCareers = async () => getData(CAREERS_RANGE, TEAM_SHEET_ID);

module.exports = {
  getTeam,
  getCareers,
};
