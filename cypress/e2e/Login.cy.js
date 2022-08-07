/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');
import { navigation } from "../page_objects/navigation";

describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        cy.get(locators.header.loginButton).click();
    });

    // it("Click on login button", () => {
    //     cy.get(locators.header.loginButton).click();
    // });

    //  Pozitivan case za login //

    it("Login/out with valid credentials", () => {
        cy.get(locators.login.emailInput).type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).type("test1235");
        cy.get(locators.login.submitButton).click();
        cy.get(locators.header.logoutButton).click();
    });

   
    //  Negativni case-ovi za login //

    it("Login with invalid credentials", () => { 
        cy.get(locators.login.emailInput).clear().type("test00@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("lest1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid email", () => {
        cy.get(locators.login.emailInput).clear().type("test00gmailcom");
        cy.get(locators.login.passwordInput).clear().type("test1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with invalid password", () => {
        cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("00000");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with blank email", () => {
        cy.get(locators.login.emailInput).clear().type("{backspace}");
        cy.get(locators.login.passwordInput).clear().type("test1235");
        cy.get(locators.login.submitButton).click();
    });

    it("Login with blank password", () => {
        cy.get(locators.login.emailInput).clear().type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).clear().type("{backspace}");
        cy.get(locators.login.submitButton).click();
    });

});