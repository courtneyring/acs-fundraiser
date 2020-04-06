const puppeteer = require('puppeteer');
require('dotenv').config();


async function setInputText(page, selector, string) {
    let input = await page.$(selector);
    console.log(input)
    await input.type(string);
}

async function login(page) {
    await setInputText(page, 'input#ACSLoginID', process.env.USERNAME);
    await setInputText(page, 'input#ACSPassword', process.env.PASSWORD);
    await Promise.all([
        page.click('#loginButton'), 
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ])
}

async function start(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'});
    await page.goto('https://secure.acsevents.org/site/SPageServer?pagename=active_my_fundraising&fr_id=98016');
    await login(page);
    await page.click('#donors > div.table-holder > p > a.btn.small.dark.left')
    // await browser.close();
}

start();