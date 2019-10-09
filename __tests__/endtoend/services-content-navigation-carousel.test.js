import { PATH } from './config/default-path';
describe('Check Services content navigation carousel', () => {
	let page;

	beforeAll(async () => {
		page = await global.browser.newPage();
		await page.setViewport({ width: 1920, height: 1080 });
	});

	afterAll(async () => {
		await page.close();
	});
	test("next_btn-1 web dev page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
	});
	test("next_btn-2 desktop apps page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-desktop-applications']");
	});
	test("next_btn-3 mobile dev page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development']");
	});
	test("next_btn-4 Education Software Development Services page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-education-software-development']");
	});
	test("next_btn-5 Custom Healthcare Software Developmen page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-custom-healthcare-software-development']");
	});
	test("next_btn-6 outstaffing page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing']");
	});
	test("next_btn-7 proof of concept page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-proof']");
	});
	test("next_btn-8 back to web dev page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
	});
	test("prev_btn-1 back to proof of concept page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-proof']");
	});
	test("prev_btn-2 back to outstafing page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-outstaffing']");
	});
	test("prev_btn-3 back to Custom Healthcare Software Developmen page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-custom-healthcare-software-development']");
	});
	test("prev_btn-4 back to Education Software Development Services page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-education-software-development']");
	});
	test("prev_btn-5 mobile dev page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-mobile-development']");
	});
	test("prev-6 desktop apps page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-desktop-applications']");
	});
	test("prev_btn-7 back to web dev page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
	});
});

