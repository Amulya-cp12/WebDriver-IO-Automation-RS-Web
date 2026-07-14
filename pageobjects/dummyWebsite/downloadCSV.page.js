import { $ } from '@wdio/globals'

class DownloadCSVPage {

    // thank you message
    get thankYouMessage() {
        return $('h1.hero-primary');
    }

    // download csv button
    get downloadCSVButton() {
       return $('button.btn.btn-primary.mt-3.mb-3');
    }

    // verify thank you page
    async verifyOrderSuccess() {

        await this.thankYouMessage.waitForDisplayed({
            timeout: 10000
        });

        const text =
            await this.thankYouMessage.getText();

        console.log("✅ Message:", text);

        const currentUrl =
            await browser.getUrl();

        console.log("✅ Current URL:", currentUrl);
    }

    // download csv
    async clickDownloadCSV() {

        await this.downloadCSVButton.waitForDisplayed({
            timeout: 10000
        });

        await this.downloadCSVButton.scrollIntoView();

        await browser.pause(1000);

        await this.downloadCSVButton.click();

        console.log("✅ CSV Download Clicked");
    }
}

export default new DownloadCSVPage();