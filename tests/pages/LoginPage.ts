import { Page, Locator } from '@playwright/test';

/**
 * Represents the LoginPage.
 * Handles all interactions with usernameInput and passwordInput.
 */
export class LoginPage{
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.locator('[data-test="login-button"]')
    this.errorMessage = page.locator('[data-test="error"]');
    }

    /**
   * Performs a login
   * @param username - The user's username
   * @param password - The user's password
   * @example
   * const loginPage = new LoginPage(page);
   * loginPage.login('max', 'password123');
   */
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}