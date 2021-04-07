class loginPage{
    emailTxt(){
        return cy.get('input[name="email"]')
    }
    passwordTxt(){
        return cy.get('input[name="password"]')
    }
    signInBtn(){
        return cy.get('button[type="submit"]').click()
    }


    //function
    login(email, password){
        this.emailTxt().type(email)
        this.passwordTxt().type(password)
        this.signInBtn().click()
    }

}
export default loginPage