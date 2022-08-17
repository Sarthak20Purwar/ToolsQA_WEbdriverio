const expectChai = require('chai').expect;
class Buttonclick
{
    get doubleClick()
    {
        return $("#doubleClickBtn");
    }

    get doubleclickmsg()
    {
        return $("#doubleClickMessage");
    }

    get rightclick()
    {
        return $("#rightClickBtn");
    }

    get rightClickmsg()
    {
        return $("#rightClickMessage");
    }

    get clickme()
    {
        return $("//button[text()='Click Me']");
    }

    get clickmsg()
    {
        return  $("#dynamicClickMessage");
    }

    async doubleclickbutton()
    {
        await this.doubleClick.doubleClick();
        await browser.pause(2000);
        expectChai(await this.doubleclickmsg.getText()).to.equal("You have done a double click");
    }

    async rightclickbutton()
    {
        await this.rightclick.click({ button: "right" });
        await browser.pause(2000);
        expectChai(await this.rightClickmsg.getText()).to.equal("You have done a right click");

    }

    async clickbutton()
    {
        await this.clickme.click();
        expectChai(await this.clickmsg.getText()).to.equal("You have done a dynamic click");
        await browser.pause(2000);
    }



}

module.exports = new Buttonclick();