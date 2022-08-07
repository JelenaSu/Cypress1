/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');
import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';


let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }


describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        navigation.clickOnLoginButton();
    });

    // it("Click on login button", () => {
    //     cy.get(locators.header.loginButton).click();
    // });

    //  Pozitivan case za login //

    it("Login/out with valid credentials", () => {
        loginPage.login("test1235@gmail.com", "test1235");
        cy.wait(1000);
        navigation.clickOnLogoutButton();
        // cy.get(locators.header.logoutButton).click();
        // cy.get(locators.header.loginButton).click();
    });

   
    //  Negativni case-ovi za login //

    it("Login with invalid credentials", () => { 
        // cy.visit("/");
        navigation.clickOnLoginButton();
        loginPage.login(faker.internet.email(), faker.internet.password());
        // cy.get(locators.login.emailInput).clear().type("test00@gmail.com");
        // cy.get(locators.login.passwordInput).clear().type("lest1235");
        // cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid email", () => {
        loginPage.login(faker.internet.email(), "test1235");
        // cy.get(locators.login.emailInput).clear().type("test00gmailcom");
        // cy.get(locators.login.passwordInput).clear().type("test1235");
        // cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid password", () => {
        loginPage.login("test1235@gmail.com", faker.internet.password());
        // cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        // cy.get(locators.login.passwordInput).clear().type("00000");
        // cy.get(locators.login.submitButton).click();
    });

    it("Login with blank email", () => {
        cy.get(locators.login.emailInput).clear().type("{backspace}");
        cy.get(locators.login.passwordInput).clear().type("test1235");
        // cy.get(locators.login.submitButton).click();
    });

    it("Login with blank password", () => {
        cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("{backspace}");
        // cy.get(locators.login.submitButton).click();
    });

});