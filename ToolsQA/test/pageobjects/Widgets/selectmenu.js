const expectChai = require('chai').expect;
class selectmenu
{

get selectvalue()
{

    return $("#withOptGroup");
}

getselectvalue1(index1 , index2)
{
    return $(`//*[text()='Group ${index1}, option ${index2}']`)
 
}

get selectone()
{
    return $("#selectOne");
}

getselectone1(text)
{
    return $(`//*[text()='${text}']`);
}

get multiselectdropdown()
{
    return $("//*[text()='Select...']");
}

get oldselectmenu()
{
    return $("#oldSelectMenu");
}

async selectValue(index1 , index2)
{
    await this.selectvalue.click();
    await this.getselectvalue1(index1 , index2).click();
    await browser.pause(2000);

}

async selectValueAssertion(text)
{
    const assert1 = await this.selectvalue.getText()
    console.log(assert1);
    await expectChai(assert1).to.include(text);

}

async selectOne(text)
{
    await this.selectone.scrollIntoView();
    await this.selectone.click();
    await this.getselectone1(text).click();
    await browser.pause(2000);
}

async selectOneAssertion(text)
{
    const assert2 = await this.selectone.getText();
    console.log(assert2);
    await expectChai(assert2).to.include(text);


}

async multiSelect(text)
{
    await this.multiselectdropdown.scrollIntoView();
    await this.multiselectdropdown.click();
    await browser.pause(2000);
    browser.keys("\uE007"); 
    browser.keys("\uE007"); 
    await browser.pause(2000);
}

async oldSelectMenu()
{
    await this.oldselectmenu.scrollIntoView();
    await this.oldselectmenu.selectByVisibleText('Blue');
    await browser.pause(2000);
}







}

module.exports = new selectmenu();