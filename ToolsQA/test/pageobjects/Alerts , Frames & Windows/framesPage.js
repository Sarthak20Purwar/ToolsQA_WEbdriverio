const expectChai = require('chai').expect;

class Frames
{
    get frame1()
    {
        return $("#frame1");
    }

    get assertframe1()
    {
        return $("#sampleHeading");
    }

    get frame2()
    {
            return  $("#frame2");
    }

    get picassert()
    {
        return $("//img[@src='/images/Toolsqa.jpg']");
    }

    async frame01()
    {
        await this.frame1.scrollIntoView();
        await this.frame1.click();
        await browser.pause(2000);
        await browser.switchToFrame(await this.frame1)
        const heading = await this.assertframe1.getText();
        console.log(heading);
        await expectChai(await heading).to.equal("This is a sample page");
        await browser.pause(2000);
        await browser.switchToFrame(null);


    }


    async frame02()
    {
       
        await this.frame2.scrollIntoView();
        await browser.switchToFrame(await this.frame2);
        const heading = await this.assertframe1.getText();
        console.log(heading);
        await expectChai(await heading).to.equal("This is a sample page");
        await browser.pause(2000);
        await browser.switchToFrame(null);

    }
    



}

module.exports = new Frames();