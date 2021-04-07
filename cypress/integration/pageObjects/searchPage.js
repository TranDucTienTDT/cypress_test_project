class searchPage {
    searchCvBtn(){
        return cy.get('.MuiButton-root')
    }
    searchBox(){
        return cy.get('input.MuiInputBase-input')
    }
    citeriaSelect(){
        return cy.get('#mui-component-select-criteria')
    }
}

export default searchPage