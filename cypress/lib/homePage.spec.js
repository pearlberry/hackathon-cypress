export class homePage {

//*****SELECTORS*****//

	amountHeader(){ return cy.get('#amount') }
	compareExpenses(){ return cy.get('#showExpensesChart') }
	tableCell(){ return cy.get('#transactionsTable tr td:last-child') }
	gif1(){ return cy.get('#flashSale') }
	gif2(){ return cy.get('#flashSale2 > img') }
	addDataSet(){ return cy.get('#addDataset') }

//*******************//

}