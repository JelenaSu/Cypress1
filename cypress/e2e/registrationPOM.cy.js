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

describe("Registration test cases", () => {
  beforeEach("Visit gallery app page and click on register button", () => {
    cy.visit("/");
    navigation.clickOnRegistrationButton();
  });

  // pozitivni case za reg.

  it("Registration with valid credentials", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
    navigation.clickOnLogoutButton();
  });
        

  it("Registration with valid password using space char.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "test 12345", "test 12345");
    navigation.clickOnLogoutButton();
  });
  

  it("Registration with valid password using 8 characters, at least one digit.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "test5test", "test5test");
    navigation.clickOnLogoutButton();    
  });

  it("Registration with valid password using 8 characters, all digits.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "11223344", "11223344");
    navigation.clickOnLogoutButton();    
  });


// Negativni case-ovi za reg.

  it("Register with unfilled requirement fields", () => {
    registrationPage.submitButton.click();
  });


  it("Register with unfilled first name", () => {
    registrationPage.registration(" ", faker.name.lastName(), faker.internet.email(), user.password, user.password);
  });

   
  it("Register with unfilled last name", () => {
    registrationPage.registration(faker.name.firstName(), " ", faker.internet.email(), user.password, user.password);
  });

     
  it("Register with unfilled email", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), " ", user.password, user.password);
  });

    
  it("Register with unfilled password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), " ", faker.internet.password());
  });


  it("Register with unfilled confirmed password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password(), " ");
  });


  it("Register with invalid email, w/o @sign", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), "11235gmail.com", user.password, user.password);
  });

     
  it("Register with existing email", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), "test1235@gmail.com", user.password, user.password);
  });


  it("Register with invalid password -less than 8 char.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "1234567", "1234567");
  });


  it("Register with invalid password - w/o at least one digit.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "aaaaaaaa", "aaaaaaaa");
  });


  it("Register with unmatching confirmed password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password(), faker.internet.password());
  });


  it("Register with unchecked Terms and conditions", () => {
    registrationPage.registrationWithoutFormCheck(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
  });

});