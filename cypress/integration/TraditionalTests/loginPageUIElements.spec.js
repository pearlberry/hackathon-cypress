/// <reference types="cypress" />

describe('Log in page elements', function () {

  before(function () {
  //Navigate to log in page
  cy.visit('/hackathonV2.html')
  })

  context('when the login page is displayed', function () {
    //Validate each UI element
    it('should contain the login form', function () {
      cy.get('.auth-box-w').should('exist')
    })
    it('should contain the logo', function () {
      cy.get('.logo-w > a > img').should('exist')
    })
    it('should contain the form header', function () {
      cy.get('.auth-header').should('exist')
      cy.get('.auth-header').invoke('text').should('contain', 'Logout Form')
    })
    it('should contain the Username fields', function () {
      //These label selectors are flaky selectors and should be brought to a developer's attention to include a unique identifier
      cy.get(':nth-child(1) > label').should('exist')
      cy.get(':nth-child(1) > label').should('contain','Username')
      //Not present in V2
      //cy.get(':nth-child(1) > .pre-icon').should('exist')

      cy.get('#username').should('exist')
      //Changed in V2
      cy.get('#username').invoke('attr', 'placeholder').should('equal', 'John Smith')
    })
    it('should contain the Password fields', function () {
      //These are flaky selectors and should be brought to a developer's attention to include a unique identifier
      cy.get(':nth-child(2) > label').should('exist')
      cy.get(':nth-child(2) > label').should('contain','Pwd')
      //Not present in V2
      //cy.get(':nth-child(2) > .pre-icon').should('exist')

      cy.get('#password').should('exist')
      //Changed in V2
      cy.get('#password').invoke('attr', 'placeholder').should('equal', 'ABC$*1@')
    })
    it('should contain the Login button', function () {
      cy.get('#log-in').should('exist')
      cy.get('#log-in').invoke('text').should('equal', 'Log In')
    })
    it('should contain the Remember Me elements', function () {
      cy.get('.form-check-input').should('exist')
      cy.get('.form-check-label').should('exist')
      cy.get('.form-check-label').invoke('text').should('equal', 'Remember Me')
    })
    it('should contain the Social Media icons', function () {
      //These are very flaky/unreliable selectors. Selectors should be updated, but these should be tested visually
      cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').should('exist')
      cy.get(':nth-child(2) > img').should('exist')
      //cy.get(':nth-child(3) > img').should('exist')
    })
  })
})