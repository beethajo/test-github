import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage  extends BasePage{

  async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(zipCode);
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async completeOrder() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async verifyOrderConfirmation() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}