#Test suit for IMDb.com searchbar
About
This project includes automated cases for IMDb.com searchbar. They created for Cypress framework. There are 3 specs: cases if searchbar, positive and negative cases for its functionality.

**Scenarios**
1. Visit imdb.com, check if input exists, check placeholder text. This scenario performs in spec file *001_check_searchbox.cy.js*.
2. Positive checks, searching valid data items using all filters (All, Titles, TV Episodes, Celebs, Companies, Keywords) including advanced search. This scenario performs in spec file *002_positive_scenarios.cy.js*:
    1. In dropdown menu selected All, type *Simpsons* in textbox
    2. In dropdown menu selected Titles, type *Simpsons* in textbox
    3. In dropdown menu selected TV Episodes, type *Simpsons* in textbox
    4. In dropdown menu selected Celebs, type *Padalecki* in textbox
    5. In dropdown menu selected Companies, type *21 Fox* in textbox
    6. In dropdown menu selected Keywords, type *monsters* in textbox
    7. In dropdown menu selected Advanced search. Test dropdown menu and search valid data
3. Negative scenarios: searching invalid data items using all filters (All, Titles, TV Episodes, Celebs, Companies, Keywords) including advanced search. This scenario performs in spec file *003_negative_scenarios.cy.js*:
    1. In dropdown menu selected All, type as many characters as possible in textbox. I noticed that box has no  limit to the numbers of characters typed in it. So I decide to type around 100 characters of all types in box. For example: *1234567890-=`~!@#$%^&*()_+[]{};':",./<>?ёйцукенгшщзхъфывапролджэячсмитьбю.qwertyuiop[]\|asdfghjkl;’zxcvbnm,./?*
    2. In dropdown menu selected Titles, type *asdhfhwueiasdhfhwueiasdhfhwuei* in textbox
    3. In dropdown menu selected TV Episodes, type  *Даун хаус* in textbox
    4. In dropdown menu selected Celebs, type *Зфвфдуслш* in textbox
    5. In dropdown menu selected Companies, type *кооператив озеро* in textbox
    6. In dropdown menu selected Keywords, type *cartoon with monsters* in textbox
    7. In dropdown menu selected Advanced search. Test dropdown menu and search valid data

**How to run tests:**

1. Install Visual Studio Core
2. Install git
3. Click Clone in *View and more actions* menu (3 dots) in *Source control* menu in slide bar
4. Copy repository URL to the box in the top of VSC window
5. Launch *Terminal* tab in toggle panel and install cypress to the project directory: *npm i cypress --save -dev*
6. Launch in the terminal test specs: *npx cypress open* to execute tests in browser and *npx cypress run* in terminal silently.
7. To execute test in browser go to: *E2E Testing* - Choose browser - Press start - Choose spec to perform

**Test results:**

1. Different order for sections (People and Titles) in search result for valid and invalid input
2. Layout issues for case 003-01: header is out of the display area
3. Improvement for search engine: try to parse phrases typed in wrong keyboard layout (case 003-04).

**Issues and things to improve**:

1. Couldn’t type special characters in searchbox (like *-=`~!@#$%^&*()_+[]{};':",./<>?*) with cypress - need to find a way to type it.
2. Didn’t do the tests for autosuggest container
3. Didn’t figure it out how to use baseUrl in cypress.
If you have any questions or suggestions feel free to cantact me: seleznev@physics.msu.ru
