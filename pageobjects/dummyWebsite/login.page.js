import { $ } from '@wdio/globals'
import Page from '../Base/page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#userEmail');
    }

    get inputPassword () {
        return $('#userPassword');
    }

    
get btnLogin() {
    return $('button[type="submit"], input[type="submit"]');
}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputEmail.waitForDisplayed({ timeout: 5000 });
        await this.inputEmail.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.waitForClickable({ timeout: 5000 });
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url('https://rahulshettyacademy.com/client/#/auth/login');
    }
}

export default new LoginPage();
