import { Page, TestInfo } from '@playwright/test';

export class TestUtils {
  static async takeScreenshotOnFailure(page: Page, testInfo: TestInfo) {
    if (testInfo.status !== 'passed') {
      await page.screenshot({ path: `screenshots/${testInfo.title.replace(/\s+/g, '_')}_failure.png` });
    }
  }
}