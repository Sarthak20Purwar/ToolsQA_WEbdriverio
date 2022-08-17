const expectChai = require('chai').expect;

class Browserwindow 
{

    get browserWindow()
    {
        return $("//*[text()='Browser Windows']");
    }

    get tabbutton()
    {
        return $("#tabButton");
    }

    get asserthead()
    {
        return $("#sampleHeading");

    }

    get windowButton()
    {
        return $("#windowButton");
    }

    get msgWindowButton()
    {
        return $("#messageWindowButton");
    }

    get msgWindowButton()
    {
        return $("#messageWindowButton");
    }


    async TabButton()
    { 
        await this.tabbutton.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        await expectChai(await this.asserthead.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
        await browser.pause(2000);


    }

    async NewWindow()
    {

        await this.windowButton.scrollIntoView();
        await this.windowButton.click();
        await browser.pause(2000);
        const handless = await browser.getWindowHandles();
        await browser.switchToWindow(handless[1]);
        await expectChai(await this.asserthead.isDisplayed()).to.equal(true);
        await browser.closeWindow();
        await browser.switchToWindow(handless[0]);
        await browser.pause(2000);
        await browser.pause(2000);


    }

    async NewWindowMsg()
    {
         await this.msgWindowButton.scrollIntoView();
         await this.msgWindowButton.click();
         const handlesss = await browser.getWindowHandles();
         await browser.switchToWindow(handlesss[1]);
         await browser.closeWindow();
         await browser.switchToWindow(handlesss[0]);
         await browser.pause(2000);
         await browser.pause(2000);
         
      
    }


}


module.exports =  new Browserwindow();