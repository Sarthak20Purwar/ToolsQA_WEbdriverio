const expectChai = require('chai').expect;

class Form 
{

    get form()
    {
        return $("//*[@class='category-cards']//div[@class='card mt-4 top-card'][2]");
    }

    get practiceForm()
    {
        return $("//*[text()='Practice Form']");
    }

    get firstName1()
    {
        return $("#firstName");
    }

    get lastName1()
    {
        return $("#lastName");
    }

    get useremail1()
    {
        return  $("#userEmail");
    }

    get number1()
    {
        return $("#userNumber");
    }

    get subjects()
    {
        return $("#subjectsContainer");
    }

    get hobbies1()
    {
        return $("hobbies-checkbox-1");
    }

    get hobbies2()
    {
        return $("hobbies-checkbox-2");
    }

    get currAddres1()
    {
        return $("#currentAddress");
    }

    get radiof()
    {
        return $(".custom-control-label");
    }

    get dob()
    {
        return $("#dateOfBirth-label");
    }

    get dobcal()
    {
        return $(".react-datepicker-wrapper");
    }

    get month()
    {
        return $(".react-datepicker__month-select");
    }

    get july()
    {
        return $("//option[@value='6']");
    }

    get year()
    {
        return $(".react-datepicker__year-select");
    }

    get yearf()
    {
        return $("//option[@value='1999']");
    }

    get date()
    {
             return $("//*[text()='20']");
    }

    get hobbiesf()
    {
        return $("//*[@class = 'form-label' and text()='Hobbies']");
    }

    get sports()
    {
        return $("//label[@class = 'custom-control-label' and text()='Sports']");
    }

    


    async openForm()
    {
        await this.practiceForm.scrollIntoView();
       await this.practiceForm.click();
       expectChai(await this.firstName1.isDisplayed()).to.equal(true);

    }

    async setDetails(fname , lname , email , number , add)
    {
        await this.firstName1.scrollIntoView();
        await this.firstName1.setValue(fname);
        await this.lastName1.setValue(lname);
        await this.useremail1.setValue(email);
        await this.radiof.click();
        await this.number1.setValue(number);
        await this.dob.scrollIntoView();
        await this.dobcal.click();
        await this.month.click();
        await this.july.click();
        await this.year.click();
        await this.yearf.click();
        await this.date.click();
        await browser.pause(2000);
        await this.hobbiesf.scrollIntoView();
        await this.sports.click();
        await this.currAddres1.setValue(add);
        await browser.pause();




    }



}


module.exports = new Form();