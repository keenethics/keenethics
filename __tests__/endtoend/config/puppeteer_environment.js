// c.f. https://facebook.github.io/jest/docs/en/puppeteer.html

const fs = require('fs');
const os = require('os');
const path = require('path');
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }
    this.global.browser = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
  }
}

module.exports = PuppeteerEnvironment;
