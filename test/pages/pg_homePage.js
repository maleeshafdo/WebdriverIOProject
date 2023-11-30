class HomePage{

    get closeGeniusPopup(){
        return $('//*[@aria-label="Dismiss sign-in info."]')
    }

    get closeGoogleOnetapPopup(){
        return $('//*[@id="close"]')
    }
    
    get clickonLanguage(){
        return $('//button[@data-testid="header-language-picker-trigger"]')
    }

    set language(language1){
        return $(`//span[text()='${language1}'][1]`).click();
    }
    
    get verifylanguage(){
        return $(`//span[text()='English (UK)'][1]`)
    }

    get clickonCurrency(){
        return $('//button[@data-testid="header-currency-picker-trigger"]')
    }
    set currency(currency1){
        return $(`//div[text()='${currency1}']`).click();
    }

    get verifycurrency(){
        return $(`//span[text()='AUD']`)
    }

    get type(){
        return $('#accommodations')
    }

    get verifyType(){
        return $('//*[@aria-current="page" and @id="accommodations"]')
    }

    get enterKeyword(){
        return $('//*[@id=":re:"]')
    }

    set selectKeywordFromDropdown(keyword){
        return $(`//div[text()= '${keyword}']`).click()
    }

    set setCheckInDate(check_in_date){
        
        return $(`//*[@data-date='${check_in_date}']`).click()
           
    }

    set setCheckOutDate(check_out_date){

        return $(`//*[@data-date='${check_out_date}']`).click()
        
    }

    get selectOccupancyConfig(){
        return $('//*[@data-testid="occupancy-config"]')
    }
    
    get selectAdult(){
        return $('//*[@class = "a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e bb803d8689 e91c91fa93"]')
    }

    get selectRoom(){
       
    }

    get clickSearch(){
        return $('//button[@type="submit"]')
    }

    get verifySearchedLocation(){

    }

    get closeItem(){
        return $('//*[@class="notice-item-close-x"]')
    }

    
}

module.exports = new HomePage()