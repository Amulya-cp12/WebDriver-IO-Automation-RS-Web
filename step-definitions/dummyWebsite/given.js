import { Given} from '@wdio/cucumber-framework';
import LoginPage from '../../pageobjects/dummyWebsite/login.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (.+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I am logged in$/, async () => {

    await LoginPage.open();

    await LoginPage.login(
        'cpamulya049@gmail.com',
        'Test@12345'
    );
});
