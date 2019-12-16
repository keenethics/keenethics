import { PATH } from './config/default-path';
describe('Check Services mobile development page', () => {
	let page;

	beforeAll(async () => {
		page = await global.browser.newPage();
		await page.setViewport({ width: 1920, height: 1080 });
	});

	afterAll(async () => {
		await page.close();
	});
	test("mobile-dev_tabs-1 mobile dev page", async () => {
		await page.goto(`${PATH}/services-mobile-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development']");
	}, 10000);
	test("mobile-dev_tabs-2 ios page", async () => {
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-mobile-development-apple"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-apple']");
	}, 10000);
	test("mobile-dev_tabs-3 android page", async () => {
		await page.goto(`${PATH}/services-mobile-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-mobile-development-android"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-android']");
	}, 10000);
	test("next_btn-1 to ios page", async () => {
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-android']");
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-apple']");
	}, 10000);
	test("next_btn-2 to android page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-android']");
	}, 10000);
	test("prev_btn-1 back to ios page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-apple']");
	}, 10000);
	test("prev_btn-2 back to android page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development-android']");
	}, 10000);
});