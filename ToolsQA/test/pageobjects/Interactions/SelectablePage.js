const expectChai = require('chai').expect;
class Selectable
{

getelement(index)
{
    return $(`//*[@id='verticalListContainer']//li[${index}]`)
}

get grid()
{
    return $("#demo-tab-grid");
}

getgridElement(row , index)
{
    return $(`div#row${row}>li:nth-of-type(${index})`);
}



async List(key1 , key2)
{
    await this.getelement(key1).click();
    const assert1 = await this.getelement(key1).getAttribute('class');
    await expectChai(await assert1 ).to.include("active");
    await this.getelement(key2).scrollIntoView();
    await this.getelement(key2).click();
    const assert2 = await this.getelement(key2).getAttribute('class');
    await expectChai(await assert2).to.include("active");
    await browser.pause(2000);


}

async Grid()
{
    await this.grid.scrollIntoView();
    await this.grid.click();
    await browser.pause(2000);
    await this.getgridElement(1,1).click();
    const assert1 = await this.getgridElement(1,1).getAttribute('class');
    await expectChai(await assert1 ).to.include("active");
    await this.getgridElement(1,2).scrollIntoView();
    await this.getgridElement(1,2).click();
    const assert2 = await this.getgridElement(1,2).getAttribute('class');
    await expectChai(await assert2 ).to.include("active");
    await this.getgridElement(2,3).scrollIntoView();
    await this.getgridElement(2,3).click();
    const assert3 = await this.getgridElement(2,3).getAttribute('class');
    await expectChai(await assert3).to.include("active");
    await this.getgridElement(3,1).scrollIntoView();
    await this.getgridElement(3,1).click();
    const assert4 = await this.getgridElement(3,1).getAttribute('class');
    await expectChai(await assert4 ).to.include("active");
    await browser.pause(2000);

}






}


module.exports = new Selectable();