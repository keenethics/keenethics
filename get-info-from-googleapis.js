const { google } = require('googleapis');
const path = require('path');

// FIXME: export to env variables
const TEAM_SHEET_ID = '18PXulnsVlgrHFHh7YLz6bkxypTlir8tZLeZWHNiGiyI';
const CREDS_FILE = 'dauntless-theme-207811-a063c4c9e36d.json';
const scopes = ['https://www.googleapis.com/auth/drive.readonly'];
const TEAM_RANGE = 'team!A1:Z999';
const CAREERS_RANGE = 'careers!A1:Z999';

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

  sanitizeSheet(valueRanges, rangeName) {
    // Make sure that all columns of data are filled out
    const values = valueRanges.find(v => v.range === rangeName).values;
    const TITLE_ROW_LENGTH = values[TITLE_COLUMN_INDEX].length;
    return values.filter(v => v.length === TITLE_ROW_LENGTH);
  }

  async getData() {
    if (this.isValidData()) {
      return Promise.resolve(this.dataStore);
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
        ranges,
      });


      const team = this.sanitizeSheet(table.data.valueRanges, TEAM_RANGE);
      const careers = this.sanitizeSheet(table.data.valueRanges, CAREERS_RANGE);

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
