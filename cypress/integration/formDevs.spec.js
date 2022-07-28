/// <reference types="cypress" />
describe('Form Devs', () => { // 1° Argumento nome da descrição, 2° Argumento Arrow function onde descreverei o test 
  beforeEach(() => cy.visit('../../formulario.html'))

  it('fills the form and submit', () => {//1° Argumento nome do teste, 2° executa uma Arrow function, no caso um teste cy()
    cy.get('#nome').as('name').type('Walmir')
    cy.get('#sobrenome').as('lastName').type('Filho')
    cy.get('#email').as('email').type('herikcontato@gmail.com')
    cy.get('input[type="radio"][value="fullstack"]').as('fullstackRadio').check()//poderia utilizar a função click()
    cy.get('#senioridade').as('seniority').select('Sênior')
    cy.get('input[type="checkbox"][value="HTML"]').as('htmlCheck').check()
    cy.get('input[type="checkbox"][value="CSS"').as('cssCheck').check()
    cy.get('input[type="checkbox"][value="PHP"]').as('phpCheck').check()
    cy.get('.botao').click()


    cy.get('@name').should('be.empty')
    cy.get('@lastName').should('be.empty')
    cy.get('@email').should('be.empty')
    cy.get('@fullstackRadio').should('not.be.checked')
    cy.get('input[type="radio"][value="frontend"]').should('be.checked')
    cy.get('@seniority').find('option').contains('Selecione').should('be.selected')
    cy.get('@htmlCheck').should('not.be.checked')
    cy.get('@cssCheck').should('not.be.checked')
    cy.get('@phpCheck').should('not.be.checked')
  })

  it('fills the form and submit', () => {
    cy.visit
  })
  it('fills the form and submit', () => {
    cy.visit
  })
  it('fills the form and submit', () => {
    cy.visit
  })
}) 