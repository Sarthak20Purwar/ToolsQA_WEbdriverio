const expectChai = require('chai').expect;
class Datepicker
{

    get datepicker()
    {
        return $("//*[text()='Date Picker']");
    }

    get dateInput()
    {
        return $("#datePickerMonthYearInput");
    }

    get monthinput1()
    {
        return $(".react-datepicker__month-select");
    }

    get yearInput1()
    {
        return $(".react-datepicker__year-select")
    }

    getdate(day)
    {
        return $(`//*[text()='${day}']`)
    }

    get dateandtimeinput()
    {
        return $("#dateAndTimePickerInput");
    }

    get yearInput2()
    {
        return $(".react-datepicker__year-read-view--selected-year");
    } 

    get monthInput2()
    {
        return $(".react-datepicker__month-dropdown-container");
    }


    getmonth(month)
    {
        return $(`//*[text()='${month}']`)
    }
    getyear(year)
    {
        return $(`//*[text()='${year}']`)
    }
    


    async clickDatePicker()
    {
          await this.datepicker.scrollIntoView();
          await this.datepicker.click();
    }


    

    async setDate(day , month , year)
    {
        await this.dateInput.click();
        await this.monthinput1.click();
        await this.monthinput1.selectByVisibleText(month);
        await this.yearInput1.click();
        await this.yearInput1.selectByVisibleText(year);
        await this.getdate(day).click();
        await browser.pause(3000);
        const assert = await this.dateInput.getAttribute('value');
        console.log(assert);
        //await expectChai(assert).to.equal(month+"/"+day+"/"+year);
         
    }

    async dateandtime(day , month , year)
    {
      
        await this.dateandtimeinput.click(); 
        await this.monthInput2.click();
        await this.getmonth(month).click();
        await this.yearInput2.click();
        await this.getyear(year).click();
        await this.getdate(day).click();
        await browser.pause(3000);

    }
    



}

module.exports = new Datepicker();