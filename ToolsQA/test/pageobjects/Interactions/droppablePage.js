const expectChai = require('chai').expect;
class Droppable
 {

    get simpleSource()
    {
        return $("#draggable");
    }

    get simpleDestination()
    {
        return $("#droppable");
    }

    get assertion()
    {
       return $("//p[text()='Dropped!']");
    }

    get accept()
    {
        return $("#droppableExample-tab-accept");
    }

    get acceptable()
    {
        return $("#acceptable");
    }

    get notacceptable()
    {
        return $("#notAcceptable");
    }

    get droppable()
    {
        return $("#droppable");
    }

    get preventpropagation()
    {
        return $("#droppableExample-tab-preventPropogation");
    }

    get preverntsource()
    {
        return $("#dragBox");
    }

    get preventnotgreedyinner()
    {
        return $("#notGreedyInnerDropBox");
    }

    get preverbtnotgreedy()
    {
        return $("#notGreedyDropBox");
    }

    get preverntgreedyinner()
    {
        return $("greedyDropBoxInner");
    }

    get preverntgreedy()
    {
        return $("greedyDropBox");
    }



    async Simple()
    {
        const sourceElement = await this.simpleSource;
        const targetElement = await this.simpleDestination;
        await sourceElement.dragAndDrop(targetElement);
        expectChai(await this.assertion.isDisplayed()).to.equal(true);
        await browser.pause(2000);
    }

    async Accept()
    {  
        await this.accept.scrollIntoView();
        await this.accept.click();
        const sourceElement1 = await this.acceptable;
        //const sourceElement2 = await this.notacceptable;
        const targetElement = await this.droppable;
        // await sourceElement2.dragAndDrop(targetElement);
        // expectChai(await this.assertion.isDisplayed()).to.equal(false);
        await sourceElement1.dragAndDrop(targetElement);
        expectChai(await this.assertion.isDisplayed()).to.equal(true);


    }


    async preventPropagation()
    {
        await this.preventpropagation.scrollIntoView();
        await this.preventpropagation.click();
        const source1 = await this.preverntsource;
        const target1 = await this.preverbtnotgreedy;
        await source1.dragAndDrop(target1);
        expectChai(await this.assertion.isDisplayed()).to.equal(true);
        await browser.pause(2000);
        
  
        // const target2 = await this.preverntgreedy;
        // await source1.dragAndDrop(target2);
        // await browser.pause(2000);

    }

 }


 module.exports = new Droppable();