/// <reference types="Cypress" />

describe("Login test cases", () => {
    it("Visit gallery app page", () => {
        cy.visit("/");
    });

    it("Click on login button", () => {
        cy.get("a[href='/login']").click();
    });

    //  Pozitivan case za login //

    it("Login with valid credentials", () => {
        cy.get('#email').type("test1235@gmail.com");
        cy.get('#password').type("test1235");
        cy.get('button[type="submit"]').click();
        cy.get('a[role="button "]').click();
        cy.get("a[href='/login']").click();
    });

   
    //  Negativni case-ovi za login //

    it("Login with invalid credentials", () => { 
        cy.get('#email').clear().type("test00@gmail.com");
        cy.get('#password').clear().type("lest1235");
        cy.get('button[type="submit"]').click();
    });

    it("Login with invalid email", () => {
        cy.get('#email').clear().type("test00gmailcom");
        cy.get('#password').clear().type("test1235");
        cy.get('button[type="submit"]').click();
    });

    it("Login with invalid password", () => {
        cy.get('#email').clear().type("test1235@gmail.com");
        cy.get('#password').clear().type("00000");
        cy.get('button[type="submit"]').click();
    });

    it("Login with blank email", () => {
        cy.get('#email').clear().type("{backspace}");
        cy.get('#password').clear().type("test1235");
        cy.get('button[type="submit"]').click();
    });

    it("Login with blank password", () => {
        cy.get('#email').clear().type("test1235@gmail.com");
        cy.get('#password').clear().type("{backspace}");
        cy.get('button[type="submit"]').click();
    });

});