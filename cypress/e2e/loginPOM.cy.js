/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');
import { navigation } from "../page_objects/navigation";
import { loginPage } from "../page_objects/loginPage";
import { faker } from '@faker-js/faker';
import { general } from "../page_objects/general";


let user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }


describe("Login test cases", () => {
    beforeEach("Visit gallery app page and click on login button", () => {
        cy.visit("/");
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com/');
        general.headerTitle.should('have.text', 'All Galleries');
        navigation.clickOnLoginButton();
        cy.url().should('contain', '/login');
        general.headerTitle.should('have.text', 'Please login');
    });

    //  Pozitivan case za login //

    it("Login with valid credential and logout", () => {
        loginPage.login("test1235@gmail.com", "test1235");
        navigation.loginButton.should('not.exist');
        navigation.logoutButton.should('exist');
        navigation.clickOnLogoutButton();
        navigation.logoutButton.should('not.exist');
        navigation.loginButton.should('exist');
    });

   
    //  Negativni case-ovi za login //

    it("Login with invalid credentials", () => { 
        navigation.clickOnLoginButton();
        loginPage.login(faker.internet.email(), faker.internet.password());
        general.errorMessage.should('exist')
        .and('have.text', 'Bad Credentials')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)');
        navigation.loginButton.should('exist');
    });

    it("Login with invalid email", () => {
        loginPage.login(faker.internet.email(), "test1235");
        general.errorMessage.should('exist');
    });

    it("Login with invalid password", () => {
        loginPage.login("test1235@gmail.com", faker.internet.password());
        general.errorMessage.should('exist');
    });

    it("Login with blank email", () => {
        loginPage.login("{backspace}", faker.internet.password());
    });

    it("Login with blank password", () => {
        loginPage.login(faker.internet.email(), "{backspace}");
    });

});