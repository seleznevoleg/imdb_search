/// <reference types="cypress"/>

describe('01. Unvalid data in searchbox with All option in dropdown menu', () => {
    it('Steps', () => {

      var input = '1234567890ёйцукенгшщзхъфывапролджэячсмитьбю.qwertyuiop[]asdfghjkl;zxcvbnm,./?'
      //1234567890{-=`~!@#$%^&*()_+[]{};':",./<>?ёйцукенгшщзхъфывапролджэячсмитьбю.qwertyuiop[]\|asdfghjkl;’zxcvbnm,./?
      //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select All, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(1) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'All');

        //type random characters, click loupe
        cy.get('input[type="text"]').type(input);
        cy.get('#suggestion-search-button').click();

        //no results for People section
        cy.get('[data-testid="find-results-section-name"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
        //no results for Titles section
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
      })
  })

  describe('02. Unvalid data in searchbox with Titles option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Titles, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(2) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Titles');

        //type random characters, click loupe
        cy.get('input[type="text"]').type('asdhfhwueiasdhfhwueiasdhfhwuei');
        cy.get('#suggestion-search-button').click();

        //no results for Titles section
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
    })
  })

  describe('03. Unvalid data in searchbox with TV Episodes option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select TV Episodes, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(3) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'TV Episodes');

        //type Даун хаус (it is a movie), click loupe
        cy.get('input[type="text"]').type('Даун хаус');
        cy.get('#suggestion-search-button').click();

        //no results for TV Episodes section
        cy.get('[data-testid="find-results-section-title"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
    })
  })

  describe('04. Unvalid data in searchbox with Celebs option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Celebs, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(4) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Celebs');

        //type Зфвфдуслш (Padalecki in russian keyboard layout), click loupe
        cy.get('input[type="text"]').type('Зфвфдуслш');
        cy.get('#suggestion-search-button').click();

        //no results for Celebs section
        cy.get('[data-testid="find-results-section-name"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
    })
  })

  describe('05. Unvalid data in searchbox with Companies option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Companies, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(5) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Companies');

        //type кооператив озеро, click loupe
        cy.get('input[type="text"]').type('кооператив озеро');
        cy.get('#suggestion-search-button').click();

        //no results for Celebs section
        cy.get('[data-testid="find-results-section-company"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
    })
  })

  describe('06. Unvalid data in searchbox with Keywords option in dropdown menu', () => {
    it('Steps', () => {
        //visit imdb.com
        cy.visit('https://imdb.com');

        //open dropdown menu with categories
        cy.get('.searchCatSelector__opener').click();

        //select Keywords, check selection
        cy.get('#navbar-search-category-select-contents > .ipc-list > :nth-child(6) > .ipc-list-item__text').click();
        cy.get('.sc-3c88d23-0 > .sc-dQppl > .ipc-button > .ipc-button__text').should('have.text', 'Keywords');

        //type cartoon with monsters, click loupe
        cy.get('input[type="text"]').type('cartoon with monsters');
        cy.get('#suggestion-search-button').click();

        //no results for Celebs section
        cy.get('[data-testid="find-results-section-keyword"] > .sc-17bafbdb-2 > [data-testid="results-section-empty-results-msg"]').should('contain.text', 'No results');
    })
  })

  describe('07. Unvalid data in searchbox with Advanced search option in dropdown menu', () => {
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

        //Versions selected, typing monster1234, slick Search
        cy.get(':nth-child(1) > form > :nth-child(2) > .ipl-input').type('monster1234');
        cy.get(':nth-child(1) > form > :nth-child(3) > .btn-raised').click();

        //Check that the search result is not empty
        cy.get('.article').should('contain.text', 'No results')
        
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

        //Trivia selected, typing halsdkhf, slick Search
        cy.get(':nth-child(2) > form > :nth-child(2) > .ipl-input > #query').type('halsdkhf')
        cy.get(':nth-child(2) > form > :nth-child(3) > .btn-raised').click();

        //Check that the search result is not empty
        cy.get('.article').should('contain.text', 'No results')
    })
  })