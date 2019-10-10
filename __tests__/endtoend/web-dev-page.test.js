import { PATH } from './config/default-path';
describe('Check Services web development page', () => {
	let page;

	beforeAll(async () => {
		page = await global.browser.newPage();
		await page.setViewport({ width: 1920, height: 1080 });
	});

	afterAll(async () => {
		await page.close();
	});
	test("content_tabs-1 e-commerce page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-web-development-e-commerce"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-e-commerce']");
	});
	test("content_tabs-2 chat bots page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-web-development-chatbot"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-chatbot']");
	});
	test("content_tabs-3 website node js page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-web-development-node"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-node']");
	});
	test("content_tabs-4 meteor.js page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-web-development-meteor"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-meteor']");
	});
	test("content_tabs-5 programmable voice page", async () => {
		await page.goto(`${PATH}/services-web-development`);
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development']");
		await page.click('div.slick-slide.slick-active a.content-tabs-item[href="/services-web-development-programmable-voice"]');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-programmable-voice']");
	});

	test("carousel_next_btn-1 e-commerce page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-e-commerce']");
	});
	test("carousel_next_btn-2 chatbot page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-chatbot']");
	});
	test("carousel_next_btn-3 node page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-node']");
	});
	test("carousel_next_btn-4 meteor page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-meteor']");
	});
	test("carousel_next_btn-5 programmable voice page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-programmable-voice']");
	});
	test("carousel_next_btn-6 back to e-commerce page", async () => {
		await page.click('a.content-navigation-carousel-link.next');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-e-commerce']");
	});
	test("carousel_prev_btn-1 back to programmable voice page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-programmable-voice']");
	});
	test("carousel_prev_btn-2 back to meteor page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-meteor']");
	});
	test("carousel_prev_btn-3 back to node page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-node']");
	});
	test("carousel_prev_btn-4 back to chatbot page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-chatbot']");
	});
	test("carousel_prev_btn-5 back to e-commerce page", async () => {
		await page.click('a.content-navigation-carousel-link.prev');
		await page.waitForSelector("a.content-navigation-carousel-link.current[href='/services-web-development-e-commerce']");
	});
});