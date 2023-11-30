const HotelDetailPage = require('../pages/pg_hotelDetailPage');

class hotelDetailComponents{


    async SelectRoom(){
    //await this.NavigateToHotelDetailPage()
    //select_room = page_title;
    //console.log(`==============SelectRoom: ${select_room}`)
    await browser.scroll(0, 900)
    await browser.scroll(0, 300)
    await browser.pause(5000)
    await HotelDetailPage.selectRoomdropdown.click()
    await browser.pause(5000)
    await HotelDetailPage.selectRoomOption.click()
    }

    async reserveNow(){
    await browser.scroll(0, 300)
    await HotelDetailPage.reserve.click()
    }
}

module.exports = new hotelDetailComponents()