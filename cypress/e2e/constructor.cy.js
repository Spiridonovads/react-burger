import "@4tw/cypress-drag-drop";

describe("constructor", () => {
  it("modals", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="product"]').first().drag('[data-testid="drop-area"]');
    cy.get('[data-testid="orderButton"]').click();
    cy.get('[data-testid="emailLoginInput"]').type("spiridonova_2804a@mail.ru");
    cy.get('[data-testid="passwordLoginInput"]').type("gfhrjdfz615");
    cy.get('[data-testid="loginButton"]').click();
    cy.get('[data-testid="orderButton"]').click();
    cy.get('[data-testid="modal"]').should("be.visible");
  });
});
