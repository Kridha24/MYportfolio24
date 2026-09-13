const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch();
  const artifactDir = '/Users/kridha/.gemini/antigravity-ide/brain/3caff3d8-0202-4182-a716-063e40ce8ff1';

  // 1. Desktop Simple View (1440px)
  const contextDesktop = await browser.newContext({
    viewport: { width: 1440, height: 1100 },
    deviceScaleFactor: 2
  });
  const pageDesktop = await contextDesktop.newPage();
  await pageDesktop.goto('http://localhost:3000/#learning', { waitUntil: 'networkidle' });
  await pageDesktop.waitForTimeout(1000);

  // Capture learning section with Simple Architecture view
  const learningSection = await pageDesktop.locator('#learning');
  await learningSection.screenshot({
    path: path.join(artifactDir, 'showcase_learning_simple_desktop.png')
  });
  console.log('Desktop Simple View captured');

  // 2. Desktop Detailed View
  const detailedBtn = pageDesktop.getByRole('button', { name: /Switch to Detailed Architecture View/i });
  await detailedBtn.click();
  await pageDesktop.waitForTimeout(600);

  await learningSection.screenshot({
    path: path.join(artifactDir, 'showcase_learning_detailed_desktop.png')
  });
  console.log('Desktop Detailed View captured');

  // 3. Close desktop context
  await contextDesktop.close();

  // 4. Mobile View (375px)
  const contextMobile = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });
  const pageMobile = await contextMobile.newPage();
  await pageMobile.goto('http://localhost:3000/#learning', { waitUntil: 'networkidle' });
  await pageMobile.waitForTimeout(1000);

  const learningSectionMobile = await pageMobile.locator('#learning');
  await learningSectionMobile.screenshot({
    path: path.join(artifactDir, 'showcase_learning_mobile.png')
  });
  console.log('Mobile View captured');
  await contextMobile.close();

  // 5. Reduced-Motion Mode (Desktop)
  const contextReduced = await browser.newContext({
    viewport: { width: 1440, height: 1100 },
    deviceScaleFactor: 2,
    reducedMotion: 'reduce'
  });
  const pageReduced = await contextReduced.newPage();
  await pageReduced.goto('http://localhost:3000/#learning', { waitUntil: 'networkidle' });
  await pageReduced.waitForTimeout(1000);

  const learningSectionReduced = await pageReduced.locator('#learning');
  await learningSectionReduced.screenshot({
    path: path.join(artifactDir, 'showcase_learning_reduced_motion.png')
  });
  console.log('Reduced-Motion View captured');
  await contextReduced.close();

  await browser.close();
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
