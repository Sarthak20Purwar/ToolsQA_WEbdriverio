const expectChai = require('chai').expect;

class Widgets

{

    getElementType(type)
    {
        return $(`//*[text()='${type}']`);
    }

    async clickElementType(type)
    {
        await this.getElementType(type).scrollIntoView()
        await this.getElementType(type).click();
        await browser.pause(2000);

    }

    async assertion(text)
    {
        
    expectChai(await $(".main-header").getText()).to.equal(text);
    }




}


module.exports = new Widgets();