/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json');

describe("Create gallery test cases", () => {
    beforeEach("Visit Gallery app page, click on Login button, login on page and cick on Create gallery button", () => {
        cy.visit("/");
        cy.get(locators.header.loginButton).click(); 
        cy.get(locators.login.emailInput).type("test1235@gmail.com");
        cy.get(locators.login.passwordInput).type("test1235");
        cy.get(locators.login.submitButton).click();
        cy.get(locators.header.createButton).click();
    });

    // Pozitivni test case-ovi 

    it("Create gallery with filled all requirements", () => {
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

    it("Create gallery with title of minimum 2 chars ", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("gr");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery with title of maximum 255 chars ", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("m8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    // Negativni test case-ovi

    it("Create gallery without filled requirements", () => {
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery without filling title tab", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery without filling URL tab", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("grrrrr");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery with title less than minimum of 2 chars ", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("g");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery with title more than maximum of 255 chars ", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("Jm8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Create gallery with invalid URL format, w/o proper picture extension (.jpg, .png, .jpeg) ", () => {
        cy.get(locators.header.createButton).click();
        cy.get(locators.createGallery.titleInput).type("grrrr");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Check option for adding more than one URL", () => {
        cy.get(locators.createGallery.titleInput).type("proba1");
        cy.get(locators.createGallery.descriptionInput).type("hi");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.addFirstImage).click();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.submitButton).click();
    });

    it("Check option for deleting URL when there is more than one", () => {
        cy.get(locators.createGallery.titleInput).type("proba1");
        cy.get(locators.createGallery.descriptionInput).type("hi");
        cy.get(locators.createGallery.imagesUrl).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.addFirstImage).click();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        cy.get(locators.createGallery.deleteUrl).click();
        cy.get(locators.createGallery.submitButton).click();
    });

});
