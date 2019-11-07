/// <reference types="cypress" />

describe('Logged in user', function () {

  before(function () {
  //Navigate to log in page
  cy.visit('/hackathonAppV2.html?showAd=true')
  })

  context('when user is logged in', function () {
    it('two gifs should exist', function () {
      cy.get('#flashSale').should('exist')
      cy.get('#flashSale2 > img').should('exist')
    })
    it('both gifs should be displayed', function () {
      //This cannot be automated without plugins/additional libraries that utilize visual testing
      //and baselines/comparisons
    })
  })
})