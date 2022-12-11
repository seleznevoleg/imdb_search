/// <reference types="cypress"/>

describe('01. Test for searchbox with All option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select All, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(1) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'All');

        //tyep Simpsons, click loupe
        cy.get('input[type="text"]').type('Simpsons');
        cy.get('#suggestion-search-button').click();

        //in results check that list is not empty
        //for titles
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > .ipc-metadata-list').children().should('have.length.greaterThan', 0);
        //for celebs
        cy.get('[data-testid="find-results-section-name"] > .sc-17bafbdb-2 > .ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('02. Test for searchbox with Titles option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Titles, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(2) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Titles');

        //type Simpsons, click loupe
        cy.get('input[type="text"]').type('Simpsons');
        cy.get('#suggestion-search-button').click();

        //in results check that Titles list is not empty
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > .ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('03. Test for searchbox with TV Episodes option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select TV Episodes, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(3) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'TV Episodes');

        //type Simpsons, click loupe
        cy.get('input[type="text"]').type('Simpsons');
        cy.get('#suggestion-search-button').click();

        //in results check that TV Episodes list is not empty
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > .ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('04. Test for searchbox with Celebs option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Celebs, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(4) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Celebs');

        //type Padalecki, click loupe
        cy.get('input[type="text"]').type('Padalecki');
        cy.get('#suggestion-search-button').click();

        //in results check that People list is not empty
        cy.get('.ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('05. Test for searchbox with Companies option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Companies, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(5) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Companies');

        //type 21 Fox, click loupe
        cy.get('input[type="text"]').type('21 Fox');
        cy.get('#suggestion-search-button').click();

        //in results check that Companies list is not empty
        cy.get('.ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('06. Test for searchbox with Keywords option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Keywords, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(6) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Keywords');

        //type monsters, click loupe
        cy.get('input[type="text"]').type('monsters');
        cy.get('#suggestion-search-button').click();

        //in results check that Keywords list is not empty
        cy.get('.ipc-metadata-list').children().should('have.length.greaterThan', 0);
    })
  })

  describe('07. Test for searchbox with Advanced search option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Advanced search, redirecting to advanced search page
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(8) > .ipc-list-item__text').click();

        //chech that default selection is Plot
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').should('have.value', 'plot')
        //changing to Quotes
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Quotes').should('have.value', 'quotes')
        //changing to Trivia
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Trivia').should('have.value', 'trivia')
        //changing to Goofs
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Goofs').should('have.value', 'goofs')
        //changing to Crazy Credits
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Crazy Credits').should('have.value', 'crazy_credits')
        //changing to Filming Locations
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Filming Locations').should('have.value', 'location')
        //changing to Soundtracks
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Soundtracks').should('have.value', 'soundtracks')
        //changing to Versions
        cy.get(':nth-child(1) > form > :nth-child(1) > .ipl-select > #type').select('Versions').should('have.value', 'versions')

        //Versions selected, typing theater, slick Search
        cy.get(':nth-child(1) > form > :nth-child(2) > .ipl-input').type('theater');
        cy.get(':nth-child(1) > form > :nth-child(3) > .btn-raised').click();
        
        //Check that the search result is not empty
        cy.get('.lister-list').children().should('have.length.greaterThan', 0);
        
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Advanced search, redirecting to advanced search page
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(8) > .ipc-list-item__text').click();

        //chech that default selection is Biographies
        cy.get(':nth-child(2) > form > :nth-child(1) > .ipl-select > #type').should('have.value', 'bio')
        //changing to Quotes
        cy.get(':nth-child(2) > form > :nth-child(1) > .ipl-select > #type').select('Quotes').should('have.value', 'quotes')
        //changing to Trivia
        cy.get(':nth-child(2) > form > :nth-child(1) > .ipl-select > #type').select('Trivia').should('have.value', 'trivia')

        //Trivia selected, typing american, slick Search
        cy.get(':nth-child(2) > form > :nth-child(2) > .ipl-input > #query').type('american')
        cy.get(':nth-child(2) > form > :nth-child(3) > .btn-raised').click();

        //Check that the search result is not empty
        cy.get('.lister-list').children().should('have.length.greaterThan', 0);
    })
  })