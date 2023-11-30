class HotelDetailPage{

    get selectRoomdropdown(){
        return $('//*[@id="hprt_nos_select_612417202_239679841_1_0_0"]')

    }

    get selectRoomOption(){
        return $('//*[@id="hprt_nos_select_612417202_239679841_1_0_0"]/option[@value="1"]')
    }

    get reserve(){
        return $('//*[@class="txp-bui-main-pp bui-button bui-button--primary  hp_rt_input px--fw-cta js-reservation-button"]')
    }
}

module.exports = new HotelDetailPage()