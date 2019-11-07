/// <reference types="cypress" />

describe('Logged in user', function () {

  const username = 'user123'
  const password = 'p4ssw0rd'

  const usernameField = 'input[id=username]'
  const passwordField = 'input[id=password]'
  const loginBtn = 'button[id=log-in]'

  const sortedArray = []

  before(function () {
  //Navigate to log in page
  cy.visit('/hackathonV2.html')
  //Log in
  cy.get(usernameField).type(username)
  cy.get(passwordField).type(password)
  cy.get(loginBtn).click()
  })

  context('when user is logged in', function () {
    it('should allow the user to click Compare Expenses', function () {
      cy.get('#showExpensesChart').click()
      cy.url().should('contain', '/hackathonChartV2.html')
    })
    it('should contain the expected values in the bar chart', function () {
      //This cannot be automated without plugins/additional libraries that utilize visual testing
      //and baselines/comparisons
    })
  })
})