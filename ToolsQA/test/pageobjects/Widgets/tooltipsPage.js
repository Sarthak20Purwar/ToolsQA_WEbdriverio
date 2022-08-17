class Tooltips
{

get hoverButton()
{
    return $("#toolTipButton");
}

async hover()
{
    await this.hoverButton.moveTo();
    await browser.pause(10000);
    const attr = await this.hoverButton.getAttribute('area-describedby');
    console.log(attr)
}

}


module.exports = new Tooltips();