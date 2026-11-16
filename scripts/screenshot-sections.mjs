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
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

  // Capture How To Use and Stats bar
  const howToUseElement = await page.$('#how-to-use');
  if (howToUseElement) {
    const box = await howToUseElement.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(artifactDir, 'preview-how-to-use.png'),
        clip: { x: 0, y: Math.max(0, box.y - 120), width: 1280, height: Math.min(box.height + 140, 850) }
      });
      console.log('Captured How to use');
    }
  }

  // Capture Calculator & Brands
  const calcElement = await page.$('#calculator');
  if (calcElement) {
    const box = await calcElement.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(artifactDir, 'preview-calculator.png'),
        clip: { x: 0, y: box.y, width: 1280, height: Math.min(box.height, 850) }
      });
      console.log('Captured Calculator');
    }
  }

  // Capture Brands
  const brandsElement = await page.$('#brands');
  if (brandsElement) {
    const box = await brandsElement.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(artifactDir, 'preview-brands.png'),
        clip: { x: 0, y: box.y, width: 1280, height: Math.min(box.height, 950) }
      });
      console.log('Captured Brands');
    }
  }

  // Capture FAQs
  const faqElement = await page.$('#faqs');
  if (faqElement) {
    const box = await faqElement.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(artifactDir, 'preview-faqs.png'),
        clip: { x: 0, y: box.y, width: 1280, height: Math.min(box.height, 900) }
      });
      console.log('Captured FAQs');
    }
  }

  await browser.close();
}

capture().catch(console.error);
