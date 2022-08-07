/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import { navigation } from "../page_objects/navigation";
import { registrationPage } from "../page_objects/registrationPage";



let user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),

}

const locators = require('../fixtures/locators.json');

describe("Registration test cases", () => {
  beforeEach("Visit gallery app page and click on register button", () => {
    cy.visit("/");
    navigation.clickOnRegistrationButton();
    // cy.get(locators.header.registerButton).click();
  });

  // pozitivni case za reg.

  it("Registration with valid credentials", () => {

  // Random email generator --->
    var uuid = () => Cypress._.random(0, 1e6);
    var id = uuid();
    var testName = `${id}@gmail.com`;

    // registrationPage.registration(faker.name.firstName, faker.name.lastName, faker.internet.email, faker.internet.password, faker.internet.passwordConfirmation)
    
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("test12345");
    cy.get(locators.register.passwordConfirmation).clear().type("test12345");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
    cy.get(locators.header.logoutButton).click();
  });
        

  it("Registration with valid password using space char.", () => {
          
  // Random email generator --->
  var uuid = () => Cypress._.random(0, 1e6);
  var id = uuid();
  var testName = `${id}@gmail.com`;
      
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("test 12345");
    cy.get(locators.register.passwordConfirmation).clear().type("test 12345");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
    cy.get(locators.header.logoutButton).click();
  });
  

  it("Registration with valid password using 8 characters, at least one digit.", () => {
          
  // Random email generator --->
    var uuid = () => Cypress._.random(0, 1e6);
    var id = uuid();
    var testName = `${id}@gmail.com`;
        
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("test5test");
    cy.get(locators.register.passwordConfirmation).clear().type("test5test");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
    cy.get(locators.header.logoutButton).click();
  });


// Negativni case-ovi za reg.

  it("Register with unfilled requirement fields", () => {
    cy.get(locators.register.submitButton).click();
  });


  it("Register with unfilled first name", () => {
    cy.get(locators.register.firstName).type("{backspace}");
    cy.get(locators.register.lastName).type("Petrovic");
    cy.get(locators.register.emailInput).type("11234@gmail.com");
    cy.get(locators.register.passwordInput).type("12345678");
    cy.get(locators.register.passwordConfirmation).type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });

   
  it("Register with unfilled last name", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("{backspace}");
    cy.get(locators.register.emailInput).clear().type("1123@gmail.com");
    cy.get(locators.register.passwordInput).clear().type("12345678");
    cy.get(locators.register.passwordConfirmation).clear().type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });

     
  it("Register with unfilled email", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type("{backspace}");
    cy.get(locators.register.passwordInput).clear().type("12345678");
    cy.get(locators.register.passwordConfirmation).clear().type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });

    
  it("Register with unfilled password", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type("11235@gmail.com");
    cy.get(locators.register.passwordInput).clear().type("{backspace}");
    cy.get(locators.register.passwordConfirmation).clear().type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });


  it("Register with unfilled confirmed password", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type("11235@gmail.com");
    cy.get(locators.register.passwordInput).clear().type("12345678");
    cy.get(locators.register.passwordConfirmation).clear().type("{backspace}");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });


  it("Register with invalid email, w/o @sign", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type("11235gmail.com");
    cy.get(locators.register.passwordInput).clear().type("123465678");
    cy.get(locators.register.passwordConfirmation).clear().type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });

  
     
  it("Register with existing email", () => {
    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type("test1235@gmail.com");
    cy.get(locators.register.passwordInput).clear().type("12345678");
    cy.get(locators.register.passwordConfirmation).clear().type("12345678");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });


  it("Register with invalid password -less than 8 char.", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("1234567");
    cy.get(locators.register.passwordConfirmation).clear().type("1234567");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });


  it("Register with invalid password - w/o at least one digit.", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("aaaaaaaa");
    cy.get(locators.register.passwordConfirmation).clear().type("aaaaaaaa");
    cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });



  it("Register with unmatching confirmed password", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("12345678");
    cy.get(locators.register.passwordConfirmation).clear().type("00000000");
    // cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });


  it("Register with unchecked Terms and conditions", () => {

    var uuid = () => Cypress._.random(0, 1e6)
    var id = uuid()
    var testName = `${id}@gmail.com`

    cy.get(locators.register.firstName).clear().type("Petar");
    cy.get(locators.register.lastName).clear().type("Petrovic");
    cy.get(locators.register.emailInput).clear().type(testName);
    cy.get(locators.register.passwordInput).clear().type("test12345");
    cy.get(locators.register.passwordConfirmation).clear().type("test12345");
    // cy.get(locators.register.formCheck).click();
    cy.get(locators.register.submitButton).click();
  });

});