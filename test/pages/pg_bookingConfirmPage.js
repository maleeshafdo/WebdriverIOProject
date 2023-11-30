class bookingConfirmPage{

    get bookingLogo(){
        return $('//*[@class="bk-icon -streamline-booking_logo_dark_bg_mono"]')
    }
}

module.exports = new bookingConfirmPage()