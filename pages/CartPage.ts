import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  async verifyProductsInCart(products: string[]) {
    for (const product of products) {
      await expect(this.page.getByText(product)).toBeVisible();
    }
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}