/// <reference types="cypress" />

import {loginPage} from "../lib/login.spec.js"
import {homePage} from "../lib/homepage.spec.js"

describe('Hackathon Traditional Tests', function () {

    const lp = new loginPage();
    const home = new homePage();
    const username = 'user123'
    const password = 'p4ssw0rd'
    const testNum = Math.floor(Math.random() * Math.floor(4));

    beforeEach(function () {
    //Navigate to log in page
    cy.eyesOpen({
      appName: 'Hackathon',
      batchName: 'Hackathon',
      browser: [
      { name: 'chrome', width: 1024, height: 1024}
      ]
    })
  })

    afterEach(function () {
    cy.eyesClose()
  })

    it('Login page elements exist', function () {
      cy.visit('/hackathonV2.html')
      //Start the test
      cy.eyesCheckWindow('Login Page')

    })

    it('Login page data driven validations', function () {
      cy.visit('/hackathonV2.html')
      //Blank username and password
      lp.usernameInput().clear().should('have.value','')
      lp.passwordInput().clear().should('have.value','')
      //Click login button
      lp.loginBtn().click()
      cy.eyesCheckWindow('Blank username and password')

      //The error alert element's selector is randomly generated and changes on every page load.
      //This is not automatable in a traditional approach and should be updated by a developer
      //when following test-driven development practices

      //Blank password
      lp.usernameInput().type(username)
      lp.passwordInput().clear().should('have.value','')
      //Click login button
      lp.loginBtn().click()
      cy.eyesCheckWindow('Blank password')

      //Blank username
      lp.usernameInput().clear().should('have.value','')
      lp.passwordInput().type(password)
      //Click login button
      lp.loginBtn().click()
      cy.eyesCheckWindow('Blank username')

      //Valid input
      lp.usernameInput().type(username)
      lp.passwordInput().type(password)
      //Click login button
      lp.loginBtn().click()
      //Verify URL after logging in / Changed in V2
      //cy.url().should('contain', '/hackathonAppV2.html')
      cy.eyesCheckWindow('Valid login')
    })

    it('Recent Transactions Table can be sorted by Amount column in Ascending order', function () {
      cy.visit('/hackathonV2.html')
      lp.usernameInput().type(username)
      lp.passwordInput().type(password)
      lp.loginBtn().click()
      
      //Sort amount column
      home.amountHeader().click()
      cy.eyesCheckWindow('Table sorted by Amount column')
    })

    it('Canvas Chart Test', function () {
      cy.visit('/hackathonV2.html')
      lp.usernameInput().type(username)
      lp.passwordInput().type(password)
      lp.loginBtn().click()
      home.compareExpenses().click()
      cy.eyesCheckWindow('Before 2019 is added')

      home.addDataSet().click()
      cy.eyesCheckWindow('After 2019 is added')
    })

    it('Dynamic Content Test', function () {
      cy.visit('/hackathonV2.html?showAd=true')
      lp.usernameInput().type(username)
      lp.passwordInput().type(password)
      lp.loginBtn().click()
      cy.eyesCheckWindow('Dynamic Content with ads')
    })
})