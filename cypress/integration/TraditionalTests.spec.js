/// <reference types="cypress" />

import {loginPage} from "../lib/login.spec.js"
import {homePage} from "../lib/homepage.spec.js"

describe('Hackathon Traditional Tests', function () {

    const lp = new loginPage();
    const home = new homePage();
    const username = 'user123'
    const password = 'p4ssw0rd'

    beforeEach(function () {
        //Navigate to log in page
        cy.visit('/hackathonV2.html')
    })

    it('Login page elements should exist', function () {
      //Validate login form elements
      lp.form().should('exist')
      lp.header().should('exist')
      //Would be raised as a bug
      lp.header().invoke('text').should('contain', 'Logout Form')
      lp.logo().should('exist')

      //Validate username elements
      lp.usernameLbl().should('exist')
      lp.usernameLbl().should('contain','Username')
      //lp.usernameIcon().should('exist')
      lp.usernameInput().should('exist')
      lp.usernameInput().invoke('attr', 'placeholder').should('equal', 'John Smith')

      //Validate password elements
      lp.passwordLbl().should('exist')
      //Would be raised as a bug/usability concern
      lp.passwordLbl().should('contain','Pwd')
      //lp.passwordIcon().should('exist')
      lp.passwordInput().should('exist')
      lp.passwordInput().invoke('attr', 'placeholder').should('equal', 'ABC$*1@')

      //Validate login elements
      lp.loginBtn().should('exist')
      lp.loginBtn().invoke('text').should('equal', 'Log In')
      lp.rememberMeCheckbox().should('exist')
      lp.rememberMeLbl().should('exist')
      lp.rememberMeLbl().invoke('text').should('equal', 'Remember Me')

      //Validate social media icons
      lp.twitterIcon().should('exist')
      lp.facebookIcon().should('exist')
      //lp.linkedInIcon().should('exist')
    })

    it('Login page data driven validations', function () {
    	//Blank username and password
    	lp.usernameInput().clear().should('have.value','')
    	lp.passwordInput().clear().should('have.value','')
    	//Click login button
    	lp.loginBtn().click()

    	//The error alert element's selector is randomly generated and changes on every page load.
    	//This is not automatable in a traditional approach and should be updated by a developer
    	//when following test-driven development practices

    	//Blank password
    	lp.usernameInput().type(username)
    	lp.passwordInput().clear().should('have.value','')
    	//Click login button
    	lp.loginBtn().click()

    	//Blank username
    	lp.usernameInput().clear().should('have.value','')
    	lp.passwordInput().type(password)
    	//Click login button
    	lp.loginBtn().click()

    	//Valid input
    	lp.usernameInput().type(username)
    	lp.passwordInput().type(password)
    	//Click login button
    	lp.loginBtn().click()
    	//Verify URL after logging in / Changed in V2
    	cy.url().should('contain', '/hackathonAppV2.html')
    })

    it('Recent Transactions Table can be sorted by Amount column in Ascending order', function () {
    	lp.usernameInput().type(username)
    	lp.passwordInput().type(password)
    	lp.loginBtn().click()
    	
    	//Sort amount column
    	home.amountHeader().click()

    	const originalElements = [];
    	const sortedElements = [];
    	
    	//One array sorted in UI, one array sorted below
    	for(var i = 0; i < (home.tableCell()).length; i++){
    		originalElements.push(home.tableCell().invoke('text'));
    	}
    	for(var i = 0; i < originalElements.length; i++){
    		sortedElements.push(originalElements[i]);
    	}

    	sortedElements.sort((a, b) => a - b);

    	//Compare both arrays
    	for(var i = 0; i < originalElements.length; i++){
    		for(var k = 0; k < sortedElements.length; k++){
    			expect(originalElements[i]).to.equal(sortedElements[k]);
    		}
    	}
    	/*The issue with this approach is that based on the application, the above test would pass
    	if numbers were ordered such as: 1, 10, 2, 20, 3, 4, etc.
    	So while this test would likely cover sorting if the app is developed properly, it may not 
    catch initial sorting defects or regressions. This is where a visual testing tool would help*/
    })

    it('Canvas Chart Test', function () {
    	/*This cannot be properly automated using a traditional approach.
    	It would require a tool like Applitools or another visual testing tool*/
    })

    it('Dynamic Content Test', function () {
    	lp.usernameInput().type(username)
    	lp.passwordInput().type(password)
    	lp.loginBtn().click()

    	home.gif1().should('exist')
    	home.gif2().should('exist')
    	/*It is not possible to validate if the gif itself is different using a traditional approach.
    	A visual testing tool would be required to detect the different gif.*/
    })
})