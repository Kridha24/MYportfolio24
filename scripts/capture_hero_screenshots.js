const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch();
  const artifactDir = '/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1';

  // Desktop 1440x900
  const contextDesktop = await browser.newContext({
    viewport: { width: 1440, height: 950 },
    deviceScaleFactor: 2
  });
  const pageDesktop = await contextDesktop.newPage();
  await pageDesktop.goto('http://localhost:3000/#home', { waitUntil: 'networkidle' });
  await pageDesktop.waitForTimeout(1000); // Allow animations to settle

  const heroDesktop = await pageDesktop.locator('#home');
  await heroDesktop.screenshot({
    path: path.join(artifactDir, 'showcase_hero_redesign_desktop.png')
  });
  console.log('Desktop hero screenshot captured');

  // Mobile 375x812
  const contextMobile = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });
  const pageMobile = await contextMobile.newPage();
  await pageMobile.goto('http://localhost:3000/#home', { waitUntil: 'networkidle' });
  await pageMobile.waitForTimeout(1000);

  const heroMobile = await pageMobile.locator('#home');
  await heroMobile.screenshot({
    path: path.join(artifactDir, 'showcase_hero_redesign_mobile.png')
  });
  console.log('Mobile 375px hero screenshot captured');

  // Small Mobile 320x650
  const contextMobileSmall = await browser.newContext({
    viewport: { width: 320, height: 700 },
    deviceScaleFactor: 2
  });
  const pageMobileSmall = await contextMobileSmall.newPage();
  await pageMobileSmall.goto('http://localhost:3000/#home', { waitUntil: 'networkidle' });
  await pageMobileSmall.waitForTimeout(1000);

  const heroMobileSmall = await pageMobileSmall.locator('#home');
  await heroMobileSmall.screenshot({
    path: path.join(artifactDir, 'showcase_hero_redesign_mobile_320.png')
  });
  console.log('Mobile 320px hero screenshot captured');

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
