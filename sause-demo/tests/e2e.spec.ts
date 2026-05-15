import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { TestUtils } from '../utils/TestUtils';
import { testData } from '../config/testData';

test.describe('Sauce Demo E2E Test', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await loginPage.navigate();
  });

  test.afterEach(async ({ page }, testInfo) => {
    await TestUtils.takeScreenshotOnFailure(page, testInfo);
  });

  test('Complete E2E user journey', async ({ page }) => {
    // Login
    await loginPage.login(testData.username, testData.password);

    // Validate login
    await inventoryPage.verifyProductsPage();

    // Add products to cart
    for (const product of testData.products) {
      await inventoryPage.addToCart(product);
    }

    // Open cart
    await inventoryPage.openCart();

    // Verify products in cart
    await cartPage.verifyProductsInCart(testData.products);

    // Checkout
    await cartPage.checkout();

    // Fill checkout info
    await checkoutPage.fillCheckoutInfo(testData.checkoutInfo.firstName, testData.checkoutInfo.lastName, testData.checkoutInfo.zipCode);

    // Complete order
    await checkoutPage.completeOrder();

    // Validate order confirmation
    await checkoutPage.verifyOrderConfirmation();
  });
});