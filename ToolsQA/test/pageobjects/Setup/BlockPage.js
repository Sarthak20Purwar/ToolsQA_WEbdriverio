const expectChai = require('chai').expect;

class Elementblock
{

    getelementScroll(Element)
    {
        return $(`//*[text()='${Element}']`)
    }

    getelementClick(index)
    {
        return  $(`//*[@class='category-cards']//div[@class='card mt-4 top-card'][${index}]`);

    }

    async scrollToElement(Element)
    {
        await this.getelementScroll(Element).scrollIntoView();
        await browser.pause(2000);

    }

    async clickOnElement(index)
    {
  
        await this.getelementClick(index).click();
        await browser.pause(2000);
    }

    async assertion(text)
    {
        
    expectChai(await $(".main-header").getText()).to.equal(text);
    }







}

module.exports = new Elementblock();
