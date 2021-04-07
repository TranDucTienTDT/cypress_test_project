class urlUtils{
    visit(baseUrl){
        return cy.get(baseUrl)
    }

    reload(){
        return cy.reload()
    }

    go(){
        return cy.go()
    }

    url(){
        return cy.url()
    }

    location(){
        return cy.location()
    }

    title(){
        return cy.title()
    }

}
export default urlUtils