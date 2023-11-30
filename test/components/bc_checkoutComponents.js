const CheckoutPage = require('../pages/pg_checkoutPage');

class checkoutComponents{
    async fillDetails(){
        await CheckoutPage.firstName.setValue('John');
        await CheckoutPage.lastName.setValue('Clarke');
        await CheckoutPage.email.setValue('john@gmail.com');
        await CheckoutPage.phone.setValue('757000000');
        await browser.pause(5000)

    }

    async clickNextButton(){
        await CheckoutPage.clickNext.click()
    }
}

module.exports = new checkoutComponents()