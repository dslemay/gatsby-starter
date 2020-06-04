describe('Site', () => {
  it('renders and can navigate between pages', () => {
    cy.visit('/')
    cy.findByText(/page 2/i)
      .click()
      .location('pathname')
      .should('eq', '/page-2/')
    cy.findByText(/homepage/i)
      .click()
      .location('pathname')
      .should('eq', '/')
  })
})
