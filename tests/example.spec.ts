// @ts-check
import { test, expect } from '@playwright/test';
import {locators} from '../locators/loginPage';
import { homePgaeLocators } from '../locators/homePage';

test.beforeEach(async ({ page }) => { 
  await page.goto("https://www.saucedemo.com/")
});



test.only('verify valid login', async ({ page }) => {
  await page.locator(locators.usernameInput).fill("standard_user")
  await page.locator(locators.passwordInput).fill("secret_sauce")
  await page.locator(locators.loginButton).click()
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  const currentUrl = page.url()
  expect(currentUrl).toContain("inventory.htm")
  });
 
  

test('Verify Products page displayed after login', async ({ page }) => {
  await page.locator(locators.usernameInput).fill("standard_user")
  await page.locator(locators.passwordInput).fill("secret_sauce")
  await page.locator(locators.loginButton).click()
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  const currentUrl = page.url()
  expect(currentUrl).toContain("inventory.htm")
  let p = await page.locator(homePgaeLocators.productsText).textContent();
  expect(p).toBe("Products");
  let s = await page.locator(homePgaeLocators.swagLabsText).textContent();
  expect(s).toBe("Swag Labs");
  });
  
  
test('Verify Products page displayed after logi 11n', async ({ page }) => {
  await page.locator(locators.usernameInput).fill("standard_user")
  await page.locator(locators.passwordInput).fill("secret_sauce")
  await page.locator(locators.loginButton).click()
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  const currentUrl = page.url()
  expect(currentUrl).toContain("inventory.htm")
  let p = await page.locator(homePgaeLocators.productsText).textContent();
  expect(p).toBe("Products");
  let s = await page.locator(homePgaeLocators.swagLabsText).textContent();
  expect(s).toBe("Swag Labs");
  });

  


// locating the elements for , locator strategies
// 1. role
// 2. text
// 3. css
// 4. xpath 