/// <reference types="Cypress" />

describe("Registration test cases", () => {
  it("Visit gallery app page", () => {
    cy.visit("/");
  });


  it("Click on register button", () => {
    cy.get('a[href="/register"]').click();
  });

  // pozitivni case za reg.

  it("Registration with valid credentials", () => {

  // Random email generator --->
    var uuid = () => Cypress._.random(0, 1e6);
    var id = uuid();
    var testName = `${id}@gmail.com`;
    
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("test12345");
    cy.get('#password-confirmation').clear().type("test12345");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
    cy.get('a[role="button "]').click();
    cy.get('a[href="/register"]').click();
  });
        

  it("Registration with valid password using space char.", () => {
          
  // Random email generator --->
  var uuid = () => Cypress._.random(0, 1e6);
  var id = uuid();
  var testName = `${id}@gmail.com`;
      
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("test 12345");
    cy.get('#password-confirmation').clear().type("test 12345");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
    cy.get('a[role="button "]').click();
    cy.get('a[href="/register"]').click();
  });
  

  it("Registration with valid password using 8 characters, at least one digit.", () => {
          
  // Random email generator --->
    var uuid = () => Cypress._.random(0, 1e6);
    var id = uuid();
    var testName = `${id}@gmail.com`;
        
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("test5test");
    cy.get('#password-confirmation').clear().type("test5test");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
    cy.get('a[role="button "]').click();
    cy.get('a[href="/register"]').click();
  });


// Negativni case-ovi za reg.

  it("Register with unfilled requirement fields", () => {
    cy.get('button[type="submit"]').click();
  });


  it("Register with unfilled first name", () => {
    cy.get('#first-name').type("{backspace}");
    cy.get('#last-name').type("Petrovic");
    cy.get('#email').type("11234@gmail.com");
    cy.get('#password').type("12345678");
    cy.get('#password-confirmation').type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });

   
  it("Register with unfilled last name", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("{backspace}");
    cy.get('#email').clear().type("1123@gmail.com");
    cy.get('#password').clear().type("12345678");
    cy.get('#password-confirmation').clear().type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });

     
  it("Register with unfilled email", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type("{backspace}");
    cy.get('#password').clear().type("12345678");
    cy.get('#password-confirmation').clear().type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });

    
  it("Register with unfilled password", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type("11235@gmail.com");
    cy.get('#password').clear().type("{backspace}");
    cy.get('#password-confirmation').clear().type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });


  it("Register with unfilled confirmed password", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type("11235@gmail.com");
    cy.get('#password').clear().type("12345678");
    cy.get('#password-confirmation').clear().type("{backspace}");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });


  it("Register with invalid email, w/o @sign", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type("11235gmail.com");
    cy.get('#password').clear().type("123465678");
    cy.get('#password-confirmation').clear().type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });

  
     
  it("Register with existing email", () => {
    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type("test1235@gmail.com");
    cy.get('#password').clear().type("12345678");
    cy.get('#password-confirmation').clear().type("12345678");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });


  it("Register with invalid password -less than 8 char.", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("1234567");
    cy.get('#password-confirmation').clear().type("1234567");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });


  it("Register with invalid password - w/o at least one digit.", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("aaaaaaaa");
    cy.get('#password-confirmation').clear().type("aaaaaaaa");
    cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });



  it("Register with unmatching confirmed password", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("12345678");
    cy.get('#password-confirmation').clear().type("00000000");
    // cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });


  it("Register with unchecked Terms and conditions", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get('#first-name').clear().type("Petar");
    cy.get('#last-name').clear().type("Petrovic");
    cy.get('#email').clear().type(testName);
    cy.get('#password').clear().type("test12345");
    cy.get('#password-confirmation').clear().type("test12345");
    // cy.get('.form-check-input').click();
    cy.get('button[type="submit"]').click();
  });

});