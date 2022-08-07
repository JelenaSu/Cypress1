/// <reference types="Cypress" />

import { navigation } from "../page_objects/navigation";
import { createGallery } from "../page_objects/createGallery";
import { faker } from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";

const locators = require('../fixtures/locators.json');


let user = {
    title: faker.word.verb(),
    description: faker.lorem.lines(),
    imageUrl: faker.image.imageUrl()
  }

  describe("Create gallery test cases", () => {
    beforeEach("Visit Gallery app page, click on Login button, login on page and click on Create gallery button", () => {
        cy.visit("/");
        navigation.clickOnLoginButton();
        loginPage.login("test1235@gmail.com", "test1235");
        navigation.clickOnCreateGalleryButton();
    });

    // Pozitivni test case-ovi 

    it("Create gallery with filled all requirements", () => {
        createGallery.create(faker.word.verb(), faker.lorem.lines(), faker.image.imageUrl());
        navigation.clickOnSubmitButton();
    });

    it("Create gallery without filling description tab", () => {
        createGallery.create(faker.word.verb(), " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton();  
    });

    it("Create gallery with title of minimum 2 chars", () => {
        createGallery.create("gr", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton();    
    });

    it("Create gallery with title of maximum 255 chars ", () => {
        createGallery.create("m8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton();
    });

    // Negativni test case-ovi

    it("Create gallery without filled requirements", () => {
        navigation.clickOnSubmitButton();
    });

    it("Create gallery without filling title tab", () => {
        createGallery.create(" ", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery without filling URL tab", () => {
        createGallery.create(faker.word.verb(), " ", " ");
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery with title less than minimum of 2 chars ", () => {
        createGallery.create("g", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery with title more than maximum of 255 chars ", () => {
        createGallery.create("Jm8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton();
    });

    it("Create gallery with invalid URL format, w/o proper picture extension (.jpg, .png, .jpeg) ", () => {
        createGallery.create(faker.word.verb(), " ", "https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor?w=610&ssl=1");
        navigation.clickOnSubmitButton();
    });

    it("Check option for adding more than one URL", () => {
        createGallery.create(faker.word.verb(), " ", faker.image.imageUrl());
        navigation.clickOnAddFirstImageButton();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        navigation.clickOnSubmitButton();
    });

    it("Check option for deleting URL when there is more than one", () => {
        createGallery.create(faker.word.verb(), " ", faker.image.imageUrl());
        navigation.clickOnAddFirstImageButton();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        navigation.clickOnDeleteUrlButton();
        navigation.clickOnSubmitButton();
    });

});

