class SearchPage{

    get selectPropertyRating(){
        return $('//*[@id="filter_group_class_:r1q:"]/div[12]/label/span[2]/span')
    }

    get sortDropdown(){
        return $('//*[@data-testid="sorters-dropdown-trigger"]')
    }

    set selectSortOption(sortoption){
        return $(`//span[text()='${sortoption}']`).click()
    }

    get nameOfSecondItem(){
        return $('//div[@data-testid="property-card"][2]//div[@data-testid="title"]')
    }

    get discountedPrice(){
        return $('//div[@data-testid="property-card"][2]//span[@data-testid="price-and-discounted-price"]')
    }

    get taxCharges(){
        return $('//div[@data-testid="property-card"][2]//div[@data-testid="taxes-and-charges"]')
    }

    get hotelDetailPage(){
        return $('//div[@data-testid="property-card"][2]//a[@data-testid="title-link"]')
    }

    get verifyHotel(){

    }
   
}
module.exports = new SearchPage()