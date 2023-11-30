const HomePage = require('../pages/pg_homePage');

class components{

    async closepopup(){
        await browser.pause(5500)
        await HomePage.closeGeniusPopup.click()
    }

    async closeGoogletappopup(){
        const iframe = $('iframe[src*="https://accounts.google.com/gsi/iframe/select?client_id=901905703382-m88jn1h9ll89odkt6t5muc6h7ep83rlh.apps.googleusercontent.com&auto_select=false&ux_mode=popup&ui_mode=card&context=signin&nonce=8367357681075267&as=HdUENl0zBIet0wXX84KzYg&channel_id=5ea606745df46e995fb5f95dab1e411f3015aa4cbcdae1945320773777099aab&origin=https%3A%2F%2Fwww.booking.com"]');
        iframe.waitForExist();
        browser.switchToFrame(iframe);
        await HomePage.closeGoogleOnetapPopup.waitForExist()
        await HomePage.closeGoogleOnetapPopup.click()
    }
   
    async selectLanguage( language1){
        await browser.pause(5500)
        await HomePage.clickonLanguage.click()
        HomePage.language = language1 
        await expect(HomePage.verifylanguage).toBeDisplayed()

    }
    async selectCurrency(currency1){
        await browser.pause(5500)
        await HomePage.clickonCurrency.click()
        HomePage.currency = currency1
        await expect(HomePage.verifycurrency).toBeDisplayed()
    }
    async selectOptionType(){
        await HomePage.type.click()    
        await expect(HomePage.verifyType).toBeDisplayed()
    }
    async SearchTerm(keyword){
        await HomePage.enterKeyword.setValue(keyword)
        HomePage.selectKeywordFromDropdown = keyword
        await browser.pause(5500)
    }

    async selectDates(){
        
        // Get current date
        var date = new Date();

        let check_in_date = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
        HomePage.setCheckInDate = check_in_date
        console.log(check_in_date);

        let check_out_date = new Date(new Date(check_in_date).setDate(new Date(check_in_date).getDate() + 2)).toISOString().slice(0, 10);
        HomePage.setCheckOutDate = check_out_date
        console.log(check_out_date);
        await browser.pause(5500)
        
    }

    async occupancy(){
        
        // Get current date
        await HomePage.selectOccupancyConfig.click()
        
        await HomePage.selectAdult.click()
 
    }

    async search(){
        
        // Get current date
        await HomePage.clickSearch.click()
        const myInput = await $('//*[@id=":re:"]')
        await expect(myInput).toHaveAttr('value', 'Kandy')
        
    }

    async CloseItem(){
        await HomePage.closeItem.click()
        await browser.pause(5000)
    }
}

module.exports = new components()