import { test, expect } from '../../fixtures/auth.fixture'
import { CartPage } from '../../pages/CartPage';

test('@smoke can user proceed to checkout', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('https://www.saucedemo.com/cart.html')

    const cartPage = new CartPage(authenticatedPage);
    cartPage.clickCheckoutButton()
});