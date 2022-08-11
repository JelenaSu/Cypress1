/// <reference types="Cypress" />

import { navigation } from "../page_objects/navigation";
import { createGallery } from "../page_objects/createGallery";
import { faker } from '@faker-js/faker';
import { loginPage } from "../page_objects/loginPage";
import { general } from "../page_objects/general";
import { myGalleries } from "../page_objects/myGalleries";


let user = {
    title: faker.word.verb(),
    description: faker.lorem.lines(),
    imageUrl: faker.image.imageUrl(),
    imageUrl2: faker.image.imageUrl()
  }

  describe("Create gallery test cases", () => {
    beforeEach("Visit Gallery app page, click on Login button, login on page and click on Create gallery button", () => {
        cy.visit("/");
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com/');
        general.headerTitle.should('have.text', 'All Galleries');
        navigation.clickOnLoginButton();
        cy.url().should('contain', '/login');
        general.headerTitle.should('have.text', 'Please login');
        loginPage.login("test1235@gmail.com", "test1235");
        navigation.loginButton.should('not.exist');
        navigation.createGalleryButton.should('exist');
        navigation.clickOnCreateGalleryButton();
        cy.url().should('contain', "https://gallery-app.vivifyideas.com/create");
        general.headerTitle.should('have.text', "Create Gallery");
        createGallery.create(user.title, 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340');
    });

    it('Check My Galleries page', () => {
        navigation.myGalleriesButton.should('exist');
        navigation.clickOnMyGalleriesButton();
        cy.wait(2000);
        navigation.clickOnMyGalleriesButton();
        general.headerTitle.should('have.text', 'My Galleries');
        myGalleries.inputFilterSearch.should('exist');
        myGalleries.filterSearchButton.should('exist');
        myGalleries.newCreatedDivGrid.should('exist');
        myGalleries.h2NewTitle.should('exist');
        myGalleries.h2NewTitle.should('contain', user.title);
    });
  });
