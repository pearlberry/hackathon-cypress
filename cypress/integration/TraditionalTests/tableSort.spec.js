/// <reference types="cypress" />

describe('Logged in user', function () {

  const username = 'user123'
  const password = 'p4ssw0rd'

  const usernameField = 'input[id=username]'
  const passwordField = 'input[id=password]'
  const loginBtn = 'button[id=log-in]'

  before(function () {
  //Navigate to log in page
  cy.visit('/hackathonV2.html')
  //Log in
  cy.get(usernameField).type(username)
  cy.get(passwordField).type(password)
  cy.get(loginBtn).click()
  })

  context('when user is viewing the Recent Transactions table', function () {
    it('should allow the user to sort table by Amounts', function () {
      cy.get('#amount').should('exist')
      cy.get('#amount').click()
    })
    it('should sort the table by Amounts in ascending order', function () {
      //This can be automated by pushing each table cell into an array and comparing the 
      //Amount column values using a sort function
      //It is much faster and much less breakable to do this with visual UI testing
      //As noted here: https://applitools.com/blog/advanced-tools-for-testing-tables
      //The sorting method is not completely accurate when the values are text.
    })
  })
})