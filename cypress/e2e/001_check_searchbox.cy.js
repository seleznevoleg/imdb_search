/// <reference types="cypress"/>

describe('Check if searchbox exists', () => {
    it('Checks', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');
        //check placeholder in the searchbox
        cy.get('#suggestion-search').should('have.attr', 'placeholder', "Search IMDb");
        //type into searchbox and check it
        cy.get('input[type="text"]').type('Simpsons').should('have.value', 'Simpsons');
      
    })
  })