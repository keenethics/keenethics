/* eslint-disable no-console, camelcase */

const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const dotenv = require('dotenv-safe');

dotenv.config({ path: process.env.ENV_PATH || './.env' });
const { SECURITY_SHEET_FILE, OAUTH_TOKEN } = process.env;

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/drive.readonly',
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar.events',
];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = OAUTH_TOKEN;

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (writeErr) => {
        if (writeErr) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
  return oAuth2Client;
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0],
  );

  // Check if we have previously stored a token.
  return new Promise((resolve, reject) => {
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return reject(getAccessToken(oAuth2Client));
      oAuth2Client.setCredentials(JSON.parse(token));
      return resolve(oAuth2Client);
    });
  });
}

// Load client secrets from a local file.

function getUser() {
  return new Promise((resolve, reject) => {
    fs.readFile(SECURITY_SHEET_FILE, async (err, content) => {
      if (err) return reject(err);
      // Authorize a client with credentials, then call the Google Drive API.
      return resolve(await authorize(JSON.parse(content)));
    });
  });
}

getUser();

module.exports = getUser;
