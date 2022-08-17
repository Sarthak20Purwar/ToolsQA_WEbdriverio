const expectChai = require('chai').expect;
class Menu

{

getItem(index)
{
    return $(`//a[text()='Main Item ${index}']`);
}

get subItem()
{
    return $("//a[text()='SUB SUB LIST »']");
}

async menuItem(index)
{
    await this.getItem(index).moveTo();
    await browser.pause(2000);
    if(expectChai(await this.subItem.isDisplayed()).to.equal(true))
    {
        await this.subItem.moveTo();
        await browser.pause(2000);
    }
}


}

module.exports = new Menu();