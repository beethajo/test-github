import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductsInCart(products: string[]) {
    for (const product of products) {
      await expect(this.page.getByText(product)).toBeVisible();
    }
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}