import { test, expect } from '@playwright/test'

test('@smoke perfoms a login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill(process.env.STANDARD_USER!);
  await page.getByPlaceholder('Password').fill(process.env.STANDARD_PASSWORD!);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('**/inventory.html');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


