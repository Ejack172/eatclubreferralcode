import puppeteer from 'puppeteer-core';
import path from 'path';

const artifactDir = 'C:\\Users\\mdmir\\.gemini\\antigravity\\brain\\7a04899f-7308-4b0b-89e1-dd452ae3d244';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // 1. Hero and top section screenshot
  const heroPath = path.join(artifactDir, 'preview-hero.png');
  await page.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 1280, height: 860 } });
  console.log('Captured Hero ->', heroPath);

  // 2. Full page screenshot
  const fullPagePath = path.join(artifactDir, 'preview-full.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Captured Full Page ->', fullPagePath);

  // 3. Mobile viewport screenshot
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  const mobilePath = path.join(artifactDir, 'preview-mobile.png');
  await page.screenshot({ path: mobilePath, clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Captured Mobile ->', mobilePath);

  await browser.close();
  console.log('Done!');
}

capture().catch((err) => {
  console.error('Error capturing screenshot:', err);
  process.exit(1);
});
