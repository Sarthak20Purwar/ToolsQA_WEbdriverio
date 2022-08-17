
const expectChai = require('chai').expect;

class Alert
{

    get alerts()
    {
        return $("//*[text()='Alerts']");
    }

    get alertbutton()
    {
        return $("#alertButton");
    }

    get timealert()
    {
        return $("#timerAlertButton");
    }

    get confirmBtn()
    {
        return $("#confirmButton");
    }

    get promtButton()
    {
        return $("#promtButton");
    }

    get confirmalertMsg()
    {
        return $("#confirmResult");
    }

    get promtalertMsg()
    {
        return $("#promptResult");
    }


    async acceptAlert()
    {

        await this.alertbutton.click();
        expectChai(await browser.isAlertOpen()).to.be.true;
        await browser.acceptAlert();
        await browser.pause(2000);


    }

    async timeAlert()
    {
        await this.timealert.scrollIntoView();
        await this.timealert.click();
        await browser.pause(6000);
        expectChai(await browser.isAlertOpen()).to.be.true;
        await browser.acceptAlert();
    


    }

    async confirmAlert()
    {
        await this.confirmBtn.click();
        await browser.pause(2000);
        expectChai(await browser.isAlertOpen()).to.be.true;
        await browser.pause(2000);
        await browser.acceptAlert();
        await expectChai(await this.confirmalertMsg.isDisplayed()).to.equal(true);



    }

    async promtAlert(text)
    {
        await this.promtButton.scrollIntoView();
        await this.promtButton.click();
        await browser.sendAlertText(text);
        await browser.acceptAlert();
        await browser.pause(2000);
        expectChai(await this.promtalertMsg.getText()).to.equal("You entered Sarthak Purwar");
    }


}




module.exports = new Alert();