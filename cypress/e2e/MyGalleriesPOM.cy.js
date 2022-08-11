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

  describe("Check My Gallery test cases", () => {
    beforeEach("Visit Gallery app page, click on Login button, login on page, click on Create gallery button and create new gallery", () => {
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
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com/my-galleries');
        cy.wait(2000);
        navigation.clickOnMyGalleriesButton();
        general.headerTitle.should('have.text', 'My Galleries')
        .and('have.css', 'color', 'rgb(72, 73, 75)');
        myGalleries.inputFilterSearch.should('exist')
        .and('have.class', 'form-control');
        myGalleries.filterSearchButton.should('exist')
        .and('have.css', 'color', 'rgb(72, 73, 75)');
        myGalleries.newCreatedDivGrid.should('exist');
        myGalleries.h2NewTitle.should('exist')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '32px');
        myGalleries.h2NewTitle.should('contain', user.title);
    });
  });
