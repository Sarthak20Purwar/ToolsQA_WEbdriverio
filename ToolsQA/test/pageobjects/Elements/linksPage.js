const expectChai = require('chai').expect;

class links
{

    get home1()
    {
        return $("#simpleLink");
    }

    get assert1()
    {
        return $("//a[@href='https://demoqa.com']");
    }


    get home2()
    {
        return $("#dynamicLink");
    }

    get assert2()
    {
        return $("//a[@href='https://demoqa.com']");
    }

    async tab1()
    {
        await this.home1.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expectChai(await this.assert1.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    

    }

    async tab2()
    {
        await this.home2.scrollIntoView();
        await this.home2.click();
        await browser.pause(2000);
        const handless = await browser.getWindowHandles();
        await browser.switchToWindow(handless[1]);
        await expectChai(await this.assert2.isDisplayed()).to.equal(true);
        await browser.pause(2000);
        await browser.closeWindow();
        await browser.switchToWindow(handless[0]);
        await browser.pause(2000);

    }



}

module.exports = new links();