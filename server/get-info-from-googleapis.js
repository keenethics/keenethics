const { google } = require('googleapis');
const { spreadSheet } = require('./config');

const TEAM_SHEET_ID = spreadSheet.id;
const CREDS_FILE = spreadSheet.securityFile;
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];
const TEAM_RANGE = spreadSheet.teamRange;
const CAREERS_RANGE = spreadSheet.careersRange;

const ranges = [TEAM_RANGE, CAREERS_RANGE];

const TITLE_COLUMN_INDEX = 0;

const arrayOfArraysToCollection = (arr) => {
  const properties = arr[TITLE_COLUMN_INDEX];
  return arr.slice(TITLE_COLUMN_INDEX + 1)
    .map((v) => {
      const obj = {};
      properties.forEach((property, index) => {
        obj[property] = v[index];
      });
      return obj;
    });
};

class DataStore {
  constructor() {
    this.dataStore = null;
    this.updateTime = null;
    this.timeToLive = 30 * 60 * 1000;
  }

  init() {
    this.getData();
  }

  isValidData() {
    const { dataStore, updateTime, timeToLive } = this;
    if (!dataStore || !updateTime) {
      return false;
    }

    const diffTime = +new Date() - updateTime;
    return diffTime < timeToLive;
  }

  updateData(data) {
    this.dataStore = data;
    this.updateTime = +new Date();
  }

  getSheetValues(valueRanges, rangeName) {
    return valueRanges.find(v => new RegExp(rangeName).test(v.range)).values;
  }

  async getData() {
    if (this.isValidData()) {
      return Promise.resolve(this.dataStore);
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


      const team = this.getSheetValues(table.data.valueRanges, TEAM_RANGE);
      const careers = this.getSheetValues(table.data.valueRanges, CAREERS_RANGE);

      const data = {
        team: arrayOfArraysToCollection(team),
        careers: arrayOfArraysToCollection(careers),
      };

      this.updateData(data);
      return Promise.resolve(this.dataStore);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

const ds = new DataStore();
ds.getData();

const getTeam = async () => {
  const d = await ds.getData();
  return d.team;
};
const getCareers = async () => {
  const d = await ds.getData();
  return d.careers;
};

module.exports = {
  getTeam,
  getCareers,
};
