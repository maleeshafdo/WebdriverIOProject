const BookingConfirmPage = require('../pages/pg_bookingConfirmPage');

class bookingConfirmComponents{
   async clickLogo(){
        await BookingConfirmPage.bookingLogo.scrollIntoView()
        await BookingConfirmPage.bookingLogo.click()
   }
}

module.exports = new bookingConfirmComponents()