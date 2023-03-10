const puppeteer = require('puppeteer');
// create function sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const yt = async (url, duration, views) => {
  for (let i = 0; i < Number(views); i++) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: [
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--no-sandbox',
        '--no-zygote',
      ],
    });

    ///
    const page = await browser.newPage();
    await page.goto(url);
    console.log('page loaded');
    await sleep(1000 * Number(duration) + 120000);
    console.log('sleep done');
    await browser.close();
    console.log('browser closed');
  }
};

yt('https://www.youtube.com/watch?v=al9aW-Gig2E', '180', '300000');
