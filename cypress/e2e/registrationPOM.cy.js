/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import { general } from '../page_objects/general';
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
    cy.url().should('contain', 'https://gallery-app.vivifyideas.com/');
    navigation.registrationButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.clickOnRegistrationButton();
    cy.url().should('contain', 'https://gallery-app.vivifyideas.com/register');
    navigation.loginButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.galleryAppButtonMain.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.allGalleriesButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.myGalleriesButton.should('not.exist');
    navigation.createGalleryButton.should('not.exist');
    general.headerTitle.should('have.text', 'Register')
    .and('have.css', 'color', 'rgb(72, 73, 75)');
    registrationPage.submitButton.should('exist')
    .and('have.css', 'background-color', 'rgb(72, 73, 75)')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
  });

  // pozitivni case za reg.

  it("Registration with valid credentials", () => {
    registrationPage.mainDivFormGroup.should('exist')
    .and('have.text', 'First NameLast NameEmailPasswordConfirmed PasswordAccepted terms and conditionsSubmit');
    registrationPage.firstName.should('exist');
    registrationPage.labelFirstName.should('exist')
    .and('have.text', 'First Name')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.lastName.should('exist');
    registrationPage.labelLastName.should('exist')
    .and('have.text', 'Last Name')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.emailInput.should('exist');
    registrationPage.labelEmail.should('exist')
    .and('have.text', 'Email')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.passwordInput.should('exist');
    registrationPage.labelPassword.should('exist')
    .and('have.text', 'Password')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.passwordConfirmation.should('exist');
    registrationPage.labelPasswordConfirmation.should('exist')
    .and('have.text', 'Confirmed Password')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.formCheck.should('exist');
    registrationPage.labelFormCheck.should('exist')
    .and('have.text', 'Accepted terms and conditions')
    .and('have.css', 'color', 'rgb(33, 37, 41)');
    registrationPage.submitButton.should('exist')
    .and('have.css', 'background-color', 'rgb(72, 73, 75)')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
    navigation.registrationButton.should('not.exist');
    navigation.loginButton.should('not.exist');
    navigation.myGalleriesButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.createGalleryButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
    navigation.logoutButton.should('exist')
    .and('have.css', 'color', 'rgb(255, 255, 255)');
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
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The first name field is required.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });

   
  it("Register with unfilled last name", () => {
    registrationPage.registration(faker.name.firstName(), " ", faker.internet.email(), user.password, user.password);
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The last name field is required.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });

     
  it("Register with unfilled email", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), " ", user.password, user.password);
  });

    
  it("Register with unfilled password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), " ", faker.internet.password());
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The password field is required.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });


  it("Register with unfilled confirmed password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password(), " ");
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The password confirmation does not match.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });


  it("Register with invalid email, w/o @sign", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), "11235gmail.com", user.password, user.password);
  });

     
  it("Register with existing email", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), "test1235@gmail.com", user.password, user.password);
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The email has already been taken.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });


  it("Register with invalid password -less than 8 char.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "1234567", "1234567");
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The password must be at least 8 characters.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });

  it("Register with invalid password - w/o at least one digit.", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), "aaaaaaaa", "aaaaaaaa");
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The password format is invalid.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });


  it("Register with unmatching confirmed password", () => {
    registrationPage.registration(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password(), faker.internet.password());
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The password confirmation does not match.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });


  it("Register with unchecked Terms and conditions", () => {
    registrationPage.registrationWithoutFormCheck(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), user.password, user.password);
    registrationPage.messageErrorAlert.should('exist')
    .and('have.text', 'The terms and conditions must be accepted.')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and('have.css', 'color', 'rgb(114, 28, 36)');
  });

});
