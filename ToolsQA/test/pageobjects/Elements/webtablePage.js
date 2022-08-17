const expectChai = require('chai').expect;


class Tables{


    get edit()
    {
        return $("#edit-record-1");
    }

    get firstName()
    {
        return $("#firstName");
    }

    get lastName()
    {
        return $("#lastName");
    }

    get userEmail()
    {
        return $("#userEmail");
    }

    get age()
    {
        return $("#age");
    }
    
    get salary()
    {
        return $("#salary");
    }

    get department()
    {
        return $("#department");
    }

    get submit()
    {
        return $("#submit");
    }

    get addrow()
    {
        return $("#addNewRecordButton");
    }

    get tableassert()
    {
        return $("//*[text()='Raghav']");
    }


   async editTableFields(fname , lname , email, age,salary,dep)
   {
       await this.edit.click();
       await browser.pause(2000);
       await this.firstName.setValue(fname);
       await this.lastName.setValue(lname);
       await this.userEmail.setValue(email);
       await this.age.setvalue(age);
       await this.salary.setValue(salary);
       await this.department.setValue(dep);
       await this.submit.scrollIntoView();
       await this.submit.click();
       await browser.pause(2000);


   }

   async addtableFields(fname , lname , email, age,salary,dep)
   {
      await this.addrow.click();
      await this.firstName.setValue(fname);
      await this.lastName.setValue(lname);
      await this.userEmail.setValue(email);
      await this.age.setValue(age);
      await this.salary.setValue(salary);
      await this.department.setValue(dep);
      await this.submit.scrollIntoView();
      await this.submit.click();
      await browser.pause(2000);

   }

   async tableassertion()
   {
    await expectChai(await this.tableassert.isDisplayed()).to.equal(true);
   }


}

module.exports = new Tables();