const SearchPage = require('../pages/pg_searchPage');

class searchcomponents{
    
    async PropertyRating(){
        
        await browser.scroll(0, 900)
        await browser.scroll(0, 200)
        await browser.pause(5000)
        await SearchPage.selectPropertyRating.click() 
        
    }

    async SortByPrice(sortoption){
        await SearchPage.sortDropdown.click()
        SearchPage.selectSortOption = sortoption
        await browser.pause(5000)

    }

    async GetNameAndAmount(){
        const name = await SearchPage.nameOfSecondItem.getText()
        const discounted_price = await SearchPage.discountedPrice.getText()
        const tax_charges = await SearchPage.taxCharges.getText()
        const amount = discounted_price + tax_charges
        //const name = await xpath.getText()
        console.log(`================: ${name}`)
        console.log(`================: ${discounted_price}`)
        console.log(`================: ${tax_charges}`)
        console.log(`================: ${amount}`)
    }

    async NavigateToHotelDetailPage(){
        await SearchPage.hotelDetailPage.click()
        const name = await SearchPage.nameOfSecondItem.getText()
        const page_title = name + ", Kandy – Updated 2023 Prices"
        await browser.pause(5000)
        await browser.switchWindow(page_title)
        console.log(`================: ${page_title}`)
        await expect(await $(`//h2[text()='${name}']`)).toBeDisplayed()
        const select_room = page_title;
        console.log(`==============SelectRoom: ${select_room}`)

        //browser.switchWindow('')
    }

    async SelectRoom(){
        //await this.NavigateToHotelDetailPage()
        //select_room = page_title;
        //console.log(`==============SelectRoom: ${select_room}`)
        await browser.scroll(0, 900)
        await browser.scroll(0, 300)
        await browser.pause(5000)
        await SearchPage.selectRoomdropdown.click()
        await browser.pause(5000)
        await SearchPage.selectRoomOption.click()
    }

    async reserveNow(){
        await browser.scroll(0, 300)
        await SearchPage.reserve.click()
    }

    async FilltheForm(){
        
    }
}

module.exports = new searchcomponents()