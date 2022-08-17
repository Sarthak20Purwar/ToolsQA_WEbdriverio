const SETUP = require("../pageobjects/Setup/setupPage");
const BLOCK = require("../pageobjects/Setup/BlockPage");
const ELEMENT = require("../pageobjects/Elements/elementsPage");
const TEXTBOX = require("../pageobjects/Elements/textboxPage");
const CHECKBOX = require("../pageobjects/Elements/checkboxPage");
const RADIO = require("../pageobjects/Elements/radioPage");
const TABLE = require("../pageobjects/Elements/webtablePage");
const BUTTON = require("../pageobjects/Elements/buttonclickPage");
const LINKS = require("../pageobjects/Elements/linksPage");
const FORM = require("../pageobjects/Forms/formPage");
const BROWSERWINDOW = require("../pageobjects/Alerts , Frames & Windows/browserwindowPage");
const ALERT = require("../pageobjects/Alerts , Frames & Windows/alertPage");
const FRAMES = require("../pageobjects/Alerts , Frames & Windows/framesPage");
const WIDGETS = require("../pageobjects/Widgets/widgetsPage");
const DATEPICKER = require("../pageobjects/Widgets/datepickerPage");
const TOOLTIPS = require("../pageobjects/Widgets/tooltipsPage");
const MENU = require("../pageobjects/Widgets/menu");
const SELECTMENU = require("../pageobjects/Widgets/selectmenu");
const SORTABLE = require("../pageobjects/Interactions/sortablePage");
const SELECTABLE = require("../pageobjects/Interactions/SelectablePage");
const DROPPABLE = require("../pageobjects/Interactions/droppablePage");
const  DATA = require("../pageobjects/data");

describe("ToolsQA" , async()=>
{

it("SetUp" , async()=>
 {
     
   await SETUP.Setup();
   await SETUP.SetupAssertion();

 })

it("Elements Block" , async()=>
 {
     await BLOCK.scrollToElement(DATA.Element);
     await BLOCK.clickOnElement(1);
     await BLOCK.assertion(DATA.Element);
    
})

it("Text Box" , async()=>
{
   await ELEMENT.clickElementType(DATA.TextBox);
   await ELEMENT.assertion(DATA.TextBox);
   await TEXTBOX.textBoxFields(DATA.Tname, DATA.Temail ,DATA.Tadd1 , DATA.Tadd2);
   await TEXTBOX.testassertion();


})

it("CheckBox" , async()=>
{
    await ELEMENT.clickElementType(DATA.CheckBox);
    await ELEMENT.assertion(DATA.CheckBox);
    await CHECKBOX.checkboxfields();
    await CHECKBOX.checkassertion();


})

it("Radio" , async()=>
{
    await ELEMENT.clickElementType(DATA.RadioButton);
    await ELEMENT.assertion(DATA.RadioButton);
    await RADIO.radiofields();
    await RADIO.radioassertion();
    

})

it("Web Tables" , async()=>
{
    await ELEMENT.clickElementType(DATA.WebTables);
    await ELEMENT.assertion(DATA.WebTables);
    await TABLE.addtableFields(DATA.Wfname1 ,DATA.Wlname ,DATA.Wemail ,DATA.Wage ,DATA.Wsalary  ,DATA.Wdomain );
    await TABLE.addtableFields(DATA.Wfname2 ,DATA.Wlname ,DATA.Wemail ,DATA.Wage ,DATA.Wsalary  ,DATA.Wdomain);
    await TABLE.tableassertion();



})

it("Buttons" , async()=>
{
    await ELEMENT.clickElementType(DATA.Button);
    await ELEMENT.assertion(DATA.Button);
    await BUTTON.doubleclickbutton();
    await BUTTON.rightclickbutton();
    await BUTTON.clickbutton();

})

it("Links" , async()=>
{
    await ELEMENT.clickElementType(DATA.Links);
    await ELEMENT.assertion(DATA.Links);
    await LINKS.tab1();
    await LINKS.tab2();

    

})




it("Forms Block" , async()=>
{
    await SETUP.Setup();
    await BLOCK.scrollToElement(DATA.Forms);
    await BLOCK.clickOnElement(2);
    await BLOCK.assertion(DATA.Forms);
   
})

it("Form" , async()=>
{
    await FORM.openForm();
    await FORM.setDetails(DATA.Ffname , DATA.Flname , DATA.Femail , DATA.Fno , DATA.Fadd);
    
})




it("Alert , Frame Block" , async()=>
{
    await SETUP.Setup();
    await BLOCK.scrollToElement(DATA.AlertFrame);
    await BLOCK.clickOnElement(3);
    await BLOCK.assertion(DATA.AlertFrame);

})

it("Browser Window" , async()=>
{
    await ELEMENT.clickElementType(DATA.BrowserWindow);
    await ELEMENT.assertion(DATA.BrowserWindow);
    await BROWSERWINDOW.TabButton();
    await BROWSERWINDOW.NewWindow();
    await BROWSERWINDOW.NewWindowMsg();

})

it("Alerts" , async()=>
{
    await ELEMENT.clickElementType(DATA.Alert);
    await ELEMENT.assertion(DATA.Alert);
    await ALERT.acceptAlert();
    await ALERT.timeAlert();
    await ALERT.confirmAlert();
    await ALERT.promtAlert(DATA.Adata);


    

})

it("Frames" , async()=>
{
    await ELEMENT.clickElementType(DATA.Frames);
    await ELEMENT.assertion(DATA.Frames);
    await FRAMES.frame01();
    await FRAMES.frame02();



})



it("Widgets Block" , async()=>
{
    await SETUP.Setup();
    await BLOCK.scrollToElement(DATA.Widgets);
    await BLOCK.clickOnElement(4);
    await BLOCK.assertion(DATA.Widgets);
})

it("Date Picker" , async()=>
{
    await ELEMENT.clickElementType(DATA.DatePicker);
    await ELEMENT.assertion(DATA.DatePicker);
    await DATEPICKER.setDate(DATA.Dday , DATA.Dmonth , DATA.Dyear);
    //await DATEPICKER.dateandtime("20" , "July" , "1999");
    


})


it("Tools Tips" , async()=>
{
    await ELEMENT.clickElementType(DATA.ToolTips);
    await ELEMENT.assertion(DATA.ToolTips);
    //await TOOLTIPS.hover();



})


it("Menu" , async()=>
{
    await ELEMENT.clickElementType(DATA.Menu);
    await ELEMENT.assertion(DATA.Menu);
    //await MENU.menuItem(1);
    

})


it("Select Menu" , async()=>
{
      
    await ELEMENT.clickElementType(DATA.SelectMenu);
    await ELEMENT.assertion(DATA.SelectMenu);
    await SELECTMENU.selectValue(1 , 2);
    await SELECTMENU.selectValueAssertion(DATA.Sassertion);
    await SELECTMENU.selectOne(DATA.Smr);
    await SELECTMENU.selectOneAssertion(DATA.Smr);
    await SELECTMENU.oldSelectMenu();

    await SELECTMENU.multiSelect();



})


it("Interactions Block" , async()=>
{

    await SETUP.Setup();
    await SETUP.SetupAssertion();
    await BLOCK.scrollToElement(DATA.Interactions);
    await BLOCK.clickOnElement(5);
    await BLOCK.assertion(DATA.Interactions);
    await browser.pause(2000);

})


xit("Sortable" , async()=>
{
    await ELEMENT.clickElementType('Sortable');
    await ELEMENT.assertion('Sortable');

    await SORTABLE.sortable();
    await browser.pause(5000);
})

it("Selectable" , async()=>
{
    await ELEMENT.clickElementType(DATA.Selectable);
    await ELEMENT.assertion(DATA.Selectable);
    await SELECTABLE.List(2,4);
    await SELECTABLE.Grid();

})

it("Droppable" , async()=>
{
    await ELEMENT.clickElementType(DATA.Droppable);
    await ELEMENT.assertion(DATA.Droppable);
    await DROPPABLE.Simple();
    //await DROPPABLE.Accept();
    //await DROPPABLE.preventPropagation();
})










})