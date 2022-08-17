const expectChai = require('chai').expect;

class Checkbox
{

    get home()
    {
        return $("//button[@title='Toggle']");
    }

    get desktop()
    {
        return $("//*[@for ='tree-node-desktop']//..//descendant::button");
    }

    get notes()
    {
        return $("//label[@for='tree-node-notes']//child::span[1]");
    }

    get documents()
    {
        return  $("//*[@for ='tree-node-documents']//..//descendant::button");
    }

    get workspace()
    {
        return $("//label[@for='tree-node-workspace']//child::span[1]");
    }
    
    get downloads()
    {
        return $("//*[@for ='tree-node-downloads']//..//descendant::button");
    }

    get wordfile()
    {
        return $("//label[@for='tree-node-wordFile']//child::span[1]");
    }

    get result()
    {
        return $("#result");
    }


    async checkboxfields()
    {
        await this.home.click();
        await this.desktop.click();
        await this.notes.click();
        await browser.pause(2000);
        await this.documents.click();
        await this.workspace.click();
        await browser.pause(2000);
        await this.downloads.scrollIntoView();
        await this.downloads.click();
        await this.wordfile.click();
        await browser.pause(2000);
    }

    async checkassertion()
    {
      expectChai(await this.result.isDisplayed()).to.equal(true);
    }


}

module.exports = new Checkbox();