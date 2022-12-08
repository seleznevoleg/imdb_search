/// <reference types="cypress"/>

describe('001', () => {
  it('Check if search input exists', () => {
    cy.visit('https://imdb.com');
    //open dropdown menu with categories
    cy.get('.searchCatSelector__opener').click();
    //select "Titles" in dropdown menu
    cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(2) > .ipc-list-item__text').click()
    //cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').click()    //cy.get('button').click();
    //cy.get('input[type="text"]').type('Simp')
//    cy.get('input[type="text"]').type('Simpsons').should('have.value', 'Simpsons')
//    cy.get("input[placeholder=\"Search IMDb\"]").type("<3");
//    cy.get('input').should('have.attr', 'area-lable', "Search IMDb");
//    cy.findByPlaceholderText("Search IMDb")
  })
})
/*
describe('002', () => {
  it('passes', () => {
  })
})
*/