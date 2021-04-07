import LocatorUtils from '../utils/locatorUtils'

class loginPage{

    locatorUtils = new LocatorUtils('input[name="email"]')

    //locator
    emailTxt(){
        return cy.get('input[name="email"]')
    }
    passwordTxt(){
        return cy.get('input[name="password"]')
    }
    signInBtn(){
        return cy.get('button[type="submit"]')
    }


    //page functions
    login(email, password){
        this.locatorUtils.get().type(email)
        //this.emailTxt().type(email)
        this.passwordTxt().type(password)
        this.signInBtn().click()
    }

}
export default loginPage