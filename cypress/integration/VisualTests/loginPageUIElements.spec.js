/// <reference types="cypress" />

describe('Log in page', function () {

  before(function () {
  //Navigate to log in page
    cy.visit('/hackathonV2.html')
    cy.eyesOpen({
      appName: 'Hackathon',
      batchName: 'Hackathon'
    })
  })

  after(function () {
    cy.eyesClose()
  })

  context('when the login page is displayed', function () {
    //Validate each UI element
    it('should contain expected elements and fields', function () {
      //cy.get('.auth-box-w').should('exist')
      //Start the test
      cy.eyesCheckWindow('Login Page')

      //cy.get('#log-in').click()

      //cy.eyesCheckWindow('Login page with error alert')
    })
  })
})