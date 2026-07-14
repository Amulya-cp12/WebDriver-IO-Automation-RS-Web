import { $, browser } from '@wdio/globals';

class RegisterPage {

    // register button on login page
    get registerPageButton() {
        return $('a[href="#/auth/register"]');
    }

    // first name
    get firstName() {
        return $('#firstName');
    }

    // last name
    get lastName() {
        return $('#lastName');
    }

    // email
    get email() {
        return $('#userEmail');
    }

    // phone number
    get phoneNumber() {
        return $('#userMobile');
    }

    // occupation dropdown
    get occupation() {
        return $('select[formcontrolname="occupation"]');
    }

    // female radio button
    get femaleGender() {
        return $('input[value="Female"]');
    }

    // password
    get password() {
        return $('#userPassword');
    }

    // confirm password
    get confirmPassword() {
        return $('#confirmPassword');
    }

    // checkbox
    get ageCheckbox() {
        return $('input[type="checkbox"]');
    }

    // final register button
    get finalRegisterButton() {
        return $('#login');
    }

    // success toaster
    get successToast() {
        return $('#toast-container');
    }

   // open register page
async clickRegisterPageButton() {

    await this.registerPageButton.click();

    console.log("Register Page Opened");
}

    async enterFirstName(firstname) {
        await this.firstName.setValue(firstname);
    }

    async enterLastName(lastname) {
        await this.lastName.setValue(lastname);
    }

    async enterEmail(email) {
        await this.email.setValue(email);
    }

    async enterPhoneNumber(number) {
        await this.phoneNumber.setValue(number);
    }

    async selectOccupation() {

        await this.occupation.selectByVisibleText('Engineer');

        console.log("Engineer Selected");
    }

    async selectFemaleGender() {

        await this.femaleGender.click();

        console.log("Female Selected");
    }

    async enterPassword(password) {
        await this.password.setValue(password);
    }

    async enterConfirmPassword(password) {
        await this.confirmPassword.setValue(password);
    }

    async clickCheckbox() {

        await this.ageCheckbox.click();

        console.log("Checkbox Clicked");
    }

    async clickRegisterButton() {

    // scroll little down
    await browser.execute(() => {
        window.scrollBy(0, 300);
    });

    await browser.pause(1000);

    // JS click
    await browser.execute((button) => {
        button.click();
    }, await this.finalRegisterButton);

    console.log("Register Button Clicked");
}

    async verifyRegistrationSuccess() {

        await this.successToast.waitForDisplayed({
            timeout: 10000
        });

        console.log("User Registered Successfully");
    }
}

export default new RegisterPage();