import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type AuthFixtures = {
    authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
    authenticatedPage: async ({ page }, use) => {
        const baseUrl = process.env.BASE_URL;
        const username = process.env.STANDARD_USER;
        const password = process.env.STANDARD_PASSWORD;

        if (!baseUrl || !username || !password) {
            throw new Error(
                'Missing required environment variables. ' +
                'Please create a .env file with BASE_URL, STANDARD_USER, and STANDARD_PASSWORD'
            );
        }

        await page.goto(baseUrl);

        const loginPage = new LoginPage(page);
        await loginPage.login(username, password);

        await page.waitForURL('**/inventory.html');

        await use(page);

        await page.context().clearCookies();
    },
});

export { expect } from '@playwright/test';