class topMenuPage {
    logo(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[1]/img')
    }
    searchIcon(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/a[1]/div/span')
    }
    myCvIcon(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/a[2]/div/span')
    }
    totalCreditsNum(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/div[1]/span')
    }
    userAvatar(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/div[2]/button/span[1]/div')
    }
    changeLanguageBtn(){
        return cy.xpath('//*[@id="root"]/div/div/div/div/div[1]/div/div[3]')
    }

}

export default topMenuPage