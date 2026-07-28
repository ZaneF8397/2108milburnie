const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const root = __dirname;
  const input = path.join(root, 'customization-guide.html');
  const output = path.join(root, 'customization-guide.pdf');

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(`file://${input}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: output,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log(`PDF created: ${output}`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
