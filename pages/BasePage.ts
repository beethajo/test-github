import { Page } from '@playwright/test';


// INheritance 
export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }
  
}