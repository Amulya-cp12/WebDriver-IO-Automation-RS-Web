import { Then } from '@wdio/cucumber-framework';

import { expect } from '@wdio/globals';

import DashboardPage from '../../pageobjects/dummyWebsite/dashboard.page.js';

import DownloadCSVPage from
'../../pageobjects/dummyWebsite/downloadCSV.page.js';

import RegisterPage from
'../../pageobjects/dummyWebsite/register.page.js';



Then(/^I should be logged in successfully$/, async () => {

    await browser.pause(5000);

    const url = await browser.getUrl();

    console.log("Current URL:", url);

    await expect(url).toContain('dashboard');
});

Then(/^product should be added successfully$/, async () => {

    await DashboardPage.successToast.waitForDisplayed({
        timeout: 5000
    });

    await expect(
        DashboardPage.successToast
    ).toBeDisplayed();
});

Then(/^I should see (.+) in the cart$/, async (productName) => {

    const result =
        await DashboardPage.isProductInCart(productName);

    await expect(result).toBe(true);
});



// verify order success
Then(/^order should be placed successfully$/, async () => {

    await DownloadCSVPage.verifyOrderSuccess();
});

// registration success
Then(
    /^user should be registered successfully$/,
    async () => {

        await RegisterPage.verifyRegistrationSuccess();
    }
);
