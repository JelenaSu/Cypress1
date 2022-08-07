/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');

describe("Create gallery test cases", () => {
    before("Visit gallery app page, click on login button and login on page", () => {
        cy.visit("/");
        cy.get(locators.header.loginButton).click(); 
        cy.get(locators.login.emailInput).type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).type("test1235");
        cy.get(locators.login.submitButton).click();
        cy.get(locators.header.createButton).click();
    });

    it("Create gallery with filled requirements", () => {
        cy.get(locators.createGallery.titleInput).type("proba1");
        cy.get(locators.createGallery.descriptionInput).type("hi");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery without filling description tab", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("grrrrr");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });



});
