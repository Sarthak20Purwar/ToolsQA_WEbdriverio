const expectChai = require('chai').expect;

class Radio

{

    get impressiveradio()
    {
        return $("//*[@for = 'impressiveRadio']");
    }

    get success()
    {
        return $(".text-success");
    }

    async radiofields()
    {
        await this.impressiveradio.click();
        await browser.pause(2000);
        

    }

    async radioassertion()
    {
      expectChai(await this.success.isDisplayed()).to.equal(true);
    }


}

module.exports = new Radio();