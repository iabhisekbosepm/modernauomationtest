class Login {
  constructor() {
    this.email = "input[type=email]";
    this.password = "input[type=password]";
    this.submit = "button[type=submit]";
  }
  get Email() {
    return cy.get(this.email); //Login.Email : cy.get('input[type=email]');
  }

  get Password() {
    return cy.get(this.password);
  }

  get SubmitButton() {
    return cy.get(this.submit);
  }
}

const login = new Login();

export default login;
