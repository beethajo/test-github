import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
   // await this.page.getByLabel('Search (Control+k)').click();
  }

  async isLoginPageVisible() {
    await this.page.waitForURL('https://www.saucedemo.com/');
  }
}