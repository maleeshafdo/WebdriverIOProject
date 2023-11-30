const home_page = require('../components/bc_homeComponents');
const search_page = require('../components/bc_searchComponents');
const hotel_page = require('../components/bc_hotelDetailComponents');
const checkout_page = require('../components/bc_checkoutComponents');
const bookingconfirm_page = require('../components/bc_bookingConfirmComponents');
const testData = require("../data/dt_Page.json");


describe('Go to Booking.com', () => {
    it('Should open the main url and verify the title', async () => {
        
        browser.maximizeWindow();
        browser.url('https://www.booking.com/');
        expect(browser).toHaveTitle(
            'Booking.com | Official site | The best hotels, flights, car rentals & accommodations'
        );
    });

    it('Should close the popup',async()=>{
        await home_page.closepopup()
    });

    it('Should close the Google one tap popup',async()=>{
        await home_page.closeGoogletappopup()
    });

    it('Should select the Language', async()=>{
        await home_page.selectLanguage("English (UK)")
        
    });

    it('Should select the Currency', async()=>{
          
        await home_page.selectCurrency("AUD")
    });
       
    it('Should select the Option Type', async()=>{
        await home_page.selectOptionType()
    });

    it('Should enter the Location',async()=>{
        
        await home_page.SearchTerm("Kandy District, Sri Lanka")
    });

    it('Should enter the Date',async()=>{
        
        await home_page.selectDates()
    });

    it('Should enter the Occupancy',async()=>{
        
        await home_page.occupancy()
    });

    it('Should click on Search and verify the searched Location',async()=>{
        
        await home_page.search()
    });

    it('Select the Star rating',async()=>{
        
        await search_page.PropertyRating()
    });

    it('Select the sort by Price in top panel in search result',async()=>{
        
        await search_page.SortByPrice("Price (lowest first)")
        //browser.pause(10000)
    });

    it('Get the name and amount with the tax of the second item from the search List page.',async()=>{
        await search_page.GetNameAndAmount()
        
    });

    it('Click the second item from the search List page and navigate to the hotel Detail page and verify the hotel name.',async()=>{
        
        await search_page.NavigateToHotelDetailPage()
    
    });

    it('Select the room against the amount and tax that you store in previous page.',async()=>{
        
        await hotel_page.SelectRoom()
        await browser.pause(6000)
    });

    
    it('Click on I’ll reserve.',async()=>{
        
        await hotel_page.reserveNow()
    });

    it('Verify the checkout date, check in date and amount',async()=>{
        
        
    });

    it('Fill all the mandatory fields in your details. First name, Last name, Email (Always You valid Test data, don’t use any if your personal details)',async()=>{
        
        await checkout_page.fillDetails()
    });
    it('Click on Next: Final details > button.',async()=>{
        
        await checkout_page.clickNextButton()
    });

    it('Verify your entered details are matched in final screen',async()=>{
        await browser.pause(5000)
        
    });
    it('Click on Booking.com top logo and navigate to the home page',async()=>{
        await bookingconfirm_page.clickLogo()
        
    });

    it('Remove the checkout hotel and verify it is not present.',async()=>{
        
        await home_page.CloseItem()
    });

       
        
    }) 
        
