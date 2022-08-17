class Sortable
{

getItems(index)
{
    return $(`//*[@class = 'vertical-list-container mt-4']//div[${index}]`)
}

async sortable()
{

    const sourceElement = await $("//*[@class = 'vertical-list-container mt-4']//div[1]");
    const targetElement = await $("//*[@class = 'vertical-list-container mt-4']//div[6]");
    await sourceElement.dragAndDrop(targetElement);
    await $("//*[@class = 'vertical-list-container mt-4']//div[6]").scrollIntoView();
    await browser.pause(2000);
    const sourceElement1 = await $("//*[@class = 'vertical-list-container mt-4']//div[2]");
    const targetElement1 = await $("//*[@class = 'vertical-list-container mt-4']//div[5]");
    await sourceElement1.dragAndDrop(targetElement1);
    await $("//*[@class = 'vertical-list-container mt-4']//div[6]").scrollIntoView();
    await browser.pause(2000);
}




}

module.exports = new Sortable();