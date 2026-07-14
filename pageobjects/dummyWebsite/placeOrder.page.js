import { $, $$ } from '@wdio/globals'

class PlaceOrderPage {

    // select country textbox
    get countryInput() {
        return $('input[placeholder="Select Country"]');
    }

    // dropdown country options
    get countryOptions() {
        return $$('.ta-results button');
    }

    // place order button
    get placeOrderButton() {
        return $('.action__submit');
    }

    // enter country
    async enterCountry(countryName) {

        // wait for checkout/order page load
        await browser.pause(2000);

        // wait for country textbox
        await this.countryInput.waitForDisplayed({
            timeout: 2000
        });

        // scroll to country field
        await this.countryInput.scrollIntoView();

        await browser.pause(2000);

        // click select country field
        await this.countryInput.click();

        // type india
        await this.countryInput.setValue(countryName);

        console.log("Typed Country:", countryName);

        await browser.pause(1000);

        // get dropdown options
        const options = await this.countryOptions;

        for (const option of options) {

            const text = await option.getText();

            console.log("Dropdown:", text);

             if (text.trim() === 'India') {

                await option.click();

                console.log("India Selected");

                break;
            }
        }
    }

    // click place order
    async clickPlaceOrder() {

        // scroll to button
        await this.placeOrderButton.scrollIntoView();

        await browser.pause(2000);

        // click place order
        await this.placeOrderButton.click();

        console.log("Place Order Clicked");
    }
}
export default new PlaceOrderPage();