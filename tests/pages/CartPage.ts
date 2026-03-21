import { Page, Locator } from '@playwright/test'

/**
 * Represent the CartPage
 * Handles all interaction with product manipulation
 */
export class CartPage{
    readonly page: Page;

    readonly removeProductButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.removeProductButton = page.getByRole('button', { name: 'Remove' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    /**
     * Remove all products from the cart
     */
    async removeAllProducts(): Promise<void> {
        const removeButtons = this.removeProductButton
        const count = await removeButtons.count();

        for (let i = 0; i < count; i++) {
            await removeButtons.first().click();
        }
    }

    /** 
     * Start the checkout process, by clicking on the checkout button
    */
    async clickCheckoutButton() {
        this.checkoutButton.click()
    }
}