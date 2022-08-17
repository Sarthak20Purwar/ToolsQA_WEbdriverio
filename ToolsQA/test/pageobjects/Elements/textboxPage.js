const expectChai = require('chai').expect;

class TextBox
{

    get username()
    {
        return $("#userName");
    }

    get email()
    {
        return $("#userEmail");
    }

    get curraddress()
    {
       return $("#currentAddress");
    }

    get permaaddress()
    {
        return $("#permanentAddress");
    }

    get submit()
    {
        return $("#submit");
    }

    get output1()
    {
        return $("#output");
    }
   
    async textBoxFields(name , email , curradd , peradd)
    {
        await this.username.setValue(name);
        await this.email.setValue(email);
        await this.curraddress.setValue(curradd);
        await this.permaaddress.setValue(peradd);
        await this.submit.scrollIntoView();
        await this.submit.click();
        await browser.pause(2000);
    }

    async testassertion()
    {
        await expectChai(await this.output1.isDisplayed()).to.equal(true);
    }

}

module.exports = new TextBox();