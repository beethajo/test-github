import { Page, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductsPage() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async addToCart(productName: string) {
    await this.page.locator('.inventory_item').filter({ hasText: productName }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.page.getByRole('link', { name: '2' }).click(); // Assuming cart shows number
  }
}