class locatorUtils{
    contructor(cssSelector){
        this.getLocator = cy.get(cssSelector)
    }
    get(){
        return this.getLocator
    }
}
export default locatorUtils