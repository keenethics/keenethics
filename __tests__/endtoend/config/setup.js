const fs = require('fs');
const os = require('os');
const path = require('path');
const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

const headless = !process.env.DEBUG;

module.exports = async function () {
  const browser = await puppeteer.launch({
    headless,
    args: [
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
    ]
  });
  global.browser = browser;
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
