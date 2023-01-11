describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[name = "Username"]').type("Bas");
    cy.get('[name = "Bench PR"]').type("50");
    cy.get('.Button').click();
  });
});