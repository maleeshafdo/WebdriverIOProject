class CheckoutPage{

    get firstName(){
        return $('//*[@id="firstname"]')
    }

    get lastName(){
        return $('//*[@id="lastname"]')
    }

    get email(){
        return $('//*[@id="email"]')
    }

    get phone(){
        return $('//*[@id="phone"]')
    }

    get clickNext(){
        return $('//*[@class="bui-button__text js-button__text"]')
    }

}
module.exports = new CheckoutPage()