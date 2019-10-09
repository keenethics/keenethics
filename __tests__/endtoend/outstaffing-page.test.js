import { PATH } from './config/default-path';
describe('Check Services outstaffing page', () => {
  let page;

  beforeAll(async () => {
    page = await global.browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
  });

  afterAll(async () => {
    await page.close();
  });
  test("outstaffing_tabs-1 outstaffing page", async () => {
    await page.goto(`${PATH}/services-outstaffing`);
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing']");
  });
  test("outstaffing_tabs-2 senior dev page", async () => {
    await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-outstaffing-senior"]');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-senior']");
  });
  test("outstaffing_tabs-3 outstaffing team page", async () => {
    await page.goto(`${PATH}/services-outstaffing`);
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing']");
    await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-outstaffing-team"]');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-team']");
  });
  test("mobile-dev_tabs-4 technical consultancy page", async () => {
    await page.goto(`${PATH}/services-outstaffing`);
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing']");
    await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-outstaffing-technical-consultancy"]');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-technical-consultancy']");
  });
  test("next_btn-1 to senior dev page", async () => {
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-technical-consultancy']");
    await page.click('a.content-navigation-carousel-link.next');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-senior']");
  });
  test("next_btn-2 to team page", async () => {
    await page.click('a.content-navigation-carousel-link.next');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-team']");
  });
  test("next_btn-3 to technical consultancy page", async () => {
    await page.click('a.content-navigation-carousel-link.next');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-technical-consultancy']");
  });
  test("prev_btn-1 back to team page", async () => {
    await page.click('a.content-navigation-carousel-link.prev');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-team']");
  });
  test("prev_btn-2 back to senior dev page", async () => {
    await page.click('a.content-navigation-carousel-link.prev');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-senior']");
  });
  test("prev_btn-2 back to technical consultancy page", async () => {
    await page.click('a.content-navigation-carousel-link.prev');
    await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing-technical-consultancy']");
  });
});