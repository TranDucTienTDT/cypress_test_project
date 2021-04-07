import LoginPage from '../pageObjects/loginPage'
import SearchPage from '../pageObjects/searchPage'
import TopMenuPage from '../pageObjects/topMenuPage'
import UrlUtils from '../utils/urlUtils'

describe('My Login to Talent Partner Test', () => {

    const urlUtils = new UrlUtils()
    const loginPage = new LoginPage()
    const topMenuPage = new TopMenuPage()
    const searchPage = new SearchPage()

    beforeEach(()=>{
        urlUtils.visit('/').url().should('include', '/login')
        //cy.fixture('userLoginDetails').as('user')
    })

    it('Login Talent Partner page unsuccessfull with invalid account', () => {
        loginPage.login('ductien.tran@jobhopin.com', 'tyyuio')
    })
    
    it.skip('Login Talent Partner page successfull with valid account', () => {
        
        loginPage.login('ductien.tran@jobhopin.com', 'demo@123')
        topMenuPage.logo().should('be.visible')
        topMenuPage.searchIcon().should('be.visible')
        topMenuPage.myCvIcon().should('be.visible')
        topMenuPage.totalCreditsNum().should('be.visible')
        topMenuPage.userAvatar().should('be.visible')
        topMenuPage.changeLanguageBtn().should('be.visible')
        searchPage.searchCvBtn().should('be.visible')
        
    })

    //it('Search CV ')
  })