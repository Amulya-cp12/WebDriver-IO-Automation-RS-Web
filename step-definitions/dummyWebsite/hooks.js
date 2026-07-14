import { Before } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/dummyWebsite/login.page.js';

Before({ tags: "@addToCart" }, async () => {

    await LoginPage.open();

    await LoginPage.login(
        'cpamulya049@gmail.com',
        'Test@12345'
    );
});