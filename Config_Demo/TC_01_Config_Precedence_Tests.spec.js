
describe("Login Suite - Config Tests",
{ baseUrl: "https://www.google.com" },
 function () {
  Cypress.config("baseUrl", "https://www.bing.com/");

  //,
  it("Login Test",
  { baseUrl: "https://reddit.com" },
   function () {
    cy.visit("/");
  });
});
