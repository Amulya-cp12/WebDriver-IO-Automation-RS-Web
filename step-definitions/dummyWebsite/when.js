import { When} from '@wdio/cucumber-framework';
import LoginPage from '../../pageobjects/dummyWebsite/login.page.js';
import DashboardPage from '../../pageobjects/dummyWebsite/dashboard.page.js';
import PlaceOrderPage from '../../pageobjects/dummyWebsite/placeOrder.page.js';
import DownloadCSVPage from
'../../pageobjects/dummyWebsite/downloadCSV.page.js';
import RegisterPage from
'../../pageobjects/dummyWebsite/register.page.js';

//login
When(
  /^I login with "([^"]*)" and "([^"]*)"$/,
  async (username, password) => {

    await LoginPage.login(username, password)
  }
)

//Dashboard 

When(/^I add (.+) to cart$/, async (productName) => {
    await DashboardPage.addProductToCart(productName);
});


// go to cart
When(/^I go to cart$/, async () => {

    await DashboardPage.goToCart();
});

//checkout
When(/^I click checkout$/, async () => {
    await DashboardPage.clickCheckout();
});


// enter country
When(/^I enter country as (.+)$/, async (countryName) => {

    await PlaceOrderPage.enterCountry(countryName);
});

// click place order
When(/^I click place order$/, async () => {

    await PlaceOrderPage.clickPlaceOrder();
});


// download csv
When(/^I download csv file$/, async () => {

    await DownloadCSVPage.clickDownloadCSV();
});


// click register button
When(/^I click register button$/, async () => {

    await RegisterPage.clickRegisterPageButton();
});

// first name
When(
    /^I enter first name as "([^"]*)"$/,
    async (firstname) => {

        await RegisterPage.enterFirstName(firstname);
    }
);

// last name
When(
    /^I enter last name as "([^"]*)"$/,
    async (lastname) => {

        await RegisterPage.enterLastName(lastname);
    }
);

// email
When(
    /^I enter email as "([^"]*)"$/,
    async (email) => {

        await RegisterPage.enterEmail(email);
    }
);

// phone number
When(
    /^I enter phone number as "([^"]*)"$/,
    async (number) => {

        await RegisterPage.enterPhoneNumber(number);
    }
);

// occupation
When(/^I choose occupation as Engineer$/, async () => {

    await RegisterPage.selectOccupation();
});

// female gender
When(/^I select female gender$/, async () => {

    await RegisterPage.selectFemaleGender();
});

// password
When(
    /^I enter password as "([^"]*)"$/,
    async (password) => {

        await RegisterPage.enterPassword(password);
    }
);

// confirm password
When(
    /^I enter confirm password as "([^"]*)"$/,
    async (password) => {

        await RegisterPage.enterConfirmPassword(password);
    }
);

// checkbox
When(/^I click age checkbox$/, async () => {

    await RegisterPage.clickCheckbox();
});

// final register button
When(/^I click final register button$/, async () => {

    await RegisterPage.clickRegisterButton();
});
