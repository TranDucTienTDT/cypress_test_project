class urlUtils{
    visit(baseUrl){
        return cy.visit(baseUrl).wait(10000)
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