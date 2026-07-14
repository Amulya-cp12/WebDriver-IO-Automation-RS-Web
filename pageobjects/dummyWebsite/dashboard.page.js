import { $, $$ } from '@wdio/globals'
import Page from '../Base/page.js'

class DashboardPage extends Page {

    // dashboard
    get dashboardPage() {
        return $('app-dashboard');
    }

    // all product cards
    get products() {
        return $$('.card-body');
    }

    // toast popup
    get successToast() {
        return $('#toast-container');
    }

    // cart button
get cartButton() {
    return $('button[routerlink="/dashboard/cart"]');
}

// checkout button
get checkoutButton() {
    return $('button=Checkout');
}

// cart products
get cartProducts() {
    return $$('h3');
}

    async addProductToCart(productName) {

        await browser.pause(3000);

        const productList = await this.products;

        for (const product of productList) {

            const title =
                await product.$('b').getText();

            console.log("Product Found:", title);

            if (title.trim() === productName.trim()) {

                // scroll little down
                await browser.execute(() => {
                    window.scrollBy(0, 500);
                });

                await browser.pause(1000);

                const addButton =
                    await product.$('button.btn.w-10.rounded');

                await addButton.scrollIntoView();

                await browser.pause(1000);

                await addButton.click();

                console.log("Add To Cart Clicked");

                break;
            }
        }
    }
    // go to cart
async goToCart() {

    await this.cartButton.waitForDisplayed({
        timeout: 4000
    });

    await this.cartButton.click();
}

// verify product in cart
async isProductInCart(productName) {

    await browser.pause(1000);

    const products = await this.cartProducts;

    for (const product of products) {

        const text = await product.getText();

        console.log("Cart Product:", text);

        if (text.trim() === productName.trim()) {

            return true;
        }
    }

    return false;
}

// click checkout
async clickCheckout() {

    // wait for checkout button
    await this.checkoutButton.waitForDisplayed({
        timeout: 3000
    });

    // scroll to button
    await this.checkoutButton.scrollIntoView();

    await browser.pause(1000);

    // click checkout button properly
    await this.checkoutButton.click();

    console.log("Checkout clicked");

    // wait for navigation
    await browser.pause(2000);

    // get current URL
    const currentUrl = await browser.getUrl();

    console.log("Current URL:", currentUrl);

    // validate order page
    if (!currentUrl.includes('/dashboard/order')) {

        throw new Error(
            'Failed to navigate to Order Page'
        );
    }
}


async enterCountry(countryName) {

    await this.countryInput.waitForDisplayed({
        timeout: 3000
    });

    await this.countryInput.scrollIntoView();

    await browser.pause(1000);

    await this.countryInput.setValue(countryName);

    console.log("Typed India");

    await browser.pause(1000);

    const options = await this.countryOptions;

    for (const option of options) {

        const text = await option.getText();

        console.log(text);

        if (text.includes('India')) {

            await option.click();

            console.log("India Selected");

            break;
        }
    }
}
}

export default new DashboardPage();