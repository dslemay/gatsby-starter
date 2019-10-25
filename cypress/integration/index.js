describe('Site', () => {
  it('renders and can navigate between pages', () => {
    cy.visit('/')
      .findByText(/page 2/i)
      .click()
      .location('pathname')
      .should('eq', '/page-2/')
      .findByText(/homepage/i)
      .click()
      .location('pathname')
      .should('eq', '/');
  });
});
