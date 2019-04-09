/* global page */

var mainNavigation = require('../navigation/main.json');
var servicesWebDevelopmentElements = require('../navigation/servicesWebDevelopment.json');
var servicesMobileDevelopmentElements = require('../navigation/servicesMobileDevelopment.json');
var servicesOutstaffingElements = require('../navigation/servicesOutstaffing.json');
var techAppsElements = require('../navigation/techApps.json');
var techFrontEndElements = require('../navigation/techFrontEnd.json');
var techBackEndElements = require('../navigation/techBackEnd.json');
var techDatabaseElements = require('../navigation/techDatabase.json');
var techApiIntegrationElements = require('../navigation/techApiIntegration.json');
var worksElements = require('../navigation/works.json');
var blog = require('../server/postsort.config.js').postsDatePair;

var navigation = ['/'];

var getRoadmap = function(elements) {
  elements.forEach((el) => {
    if (el.points) {
      getRoadmap(el.points);
    } else {
      navigation.push(el.href);
    }
  });
};

getRoadmap(mainNavigation);
getRoadmap(servicesWebDevelopmentElements);
getRoadmap(servicesMobileDevelopmentElements);
getRoadmap(servicesOutstaffingElements);
getRoadmap(techAppsElements);
getRoadmap(techFrontEndElements);
getRoadmap(techBackEndElements);
getRoadmap(techDatabaseElements);
getRoadmap(techApiIntegrationElements);
getRoadmap(worksElements);
getRoadmap(blog);

describe('Page rendering', () => {
  navigation.forEach((nav) => {
    it(nav, async () => {
      await page.goto(`http://localhost:3000${nav}`);
      await expect(page).toMatchElement('.navigation');
    });
  });
});
