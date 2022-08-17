const expectChai = require('chai').expect;

class Setup {

    get setupassert()
    {
        return $("//img[@src='/images/Toolsqa.jpg']");
    }

    async Setup()
    {
        await browser.url("https://demoqa.com/");
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("ToolsQA"); 
    }

    async SetupAssertion()
    {
        expectChai(await this.setupassert.isDisplayed()).to.equal(true);  
        await browser.fullscreenWindow();
        await browser.pause(2000);
    }




}

module.exports = new Setup();