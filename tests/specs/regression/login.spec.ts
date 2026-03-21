import { test, expect } from '../../fixtures/login.fixture'

test('@regression Standard user can login', async ({ loginPage }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.STANDARD_PASSWORD!);
    await expect(loginPage.page).toHaveURL(/inventory.html/);
});

test('@regression Invalid username show error', async ({ loginPage }) => {
    await loginPage.login('invalid_user', process.env.STANDARD_PASSWORD!);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service')
});

test('@regression Invalid password show error', async ({ loginPage }) => {
    await loginPage.login(process.env.STANDARD_USER!, 'password123');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
});