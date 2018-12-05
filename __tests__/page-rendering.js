/* global page */

var mainNavigation = require('../navigation/main.json');
var servicesWebDevelopment = require('../navigation/servicesWebDevelopment.json');

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
getRoadmap(servicesWebDevelopment);

describe('Page rendering', () => {
  navigation.forEach((nav) => {
    it(nav, async () => {
      await page.goto(`http://localhost:3000${nav}`);
      await expect(page).toMatchElement('.navigation');
    });
  });
});
