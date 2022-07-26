describe('Form Devs', () => { // 1° Argumento nome da descrição, 2° Argumento Arrow function onde descreverei o test 
  beforeEach(()=> cy.visit('../../formulario.html'))

  it('fills the form and submit', () => {//1° Argumento nome do teste, 2° executa uma Arrow function, no caso um teste cy()
    cy.get('#nome').as('name').type('Walmir')
    cy.get('#sobrenome').as('lastName').type('Filho')
    cy.get('#email').as('email').type('herikcontato@gmail.com')
    cy.get('.botao').click()

    cy.get('@name').should('be.empty')
    cy.get('@lastName').should('be.empty')
    cy.get('@email').should('be.empty')
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