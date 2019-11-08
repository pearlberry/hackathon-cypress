export class loginPage {

//*****SELECTORS*****//

	form(){ return cy.get('.auth-box-w') }
	logo(){ return cy.get('.logo-w > a > img') }
	header(){ return cy.get('.auth-header') }
	errorAlert(){ return cy.get('#random_id_9') } //This selector needs to be changed by a dev
	usernameLbl(){ return cy.get(':nth-child(1) > label') }
	usernameIcon(){ return cy.get(':nth-child(1) > .pre-icon') }
	usernameInput(){ return cy.get('#username') }
	passwordLbl(){ return cy.get(':nth-child(2) > label') }
	passwordIcon(){ return cy.get(':nth-child(2) > .pre-icon') }
	passwordInput(){ return cy.get('#password') }
	loginBtn(){ return cy.get('#log-in') }
	rememberMeCheckbox(){ return cy.get('.form-check-input') }
	rememberMeLbl(){ return cy.get('.form-check-label') }
	twitterIcon(){ return cy.get('[style="display: inline-block; margin-bottom:4px;"] > img') }
	facebookIcon(){ return cy.get(':nth-child(2) > img') }
	linkedInIcon(){ return cy.get(':nth-child(3) > img') }

//*******************//

}