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
        createGallery.create(faker.word.verb(), faker.image.imageUrl(), faker.lorem.lines());
        navigation.clickOnSubmitButton();
    });

    it("Create gallery without filling description tab", () => {
        createGallery.create(faker.word.verb(), faker.image.imageUrl());
        navigation.clickOnSubmitButton();  
    });

    it("Create gallery with description of maximum 1000 chars ", () => {
        createGallery.create(faker.word.verb(), faker.image.imageUrl(), "8qHkcu0tpM297VedghUqoL1fTOuHDnbXxjRuuLATKZf1lfUCdGoHTMT2dkfcxBaA8c1hmXvWwDINJTiGXmIZfvVxYa43XpacctDvPF0rAlgfptejKEzQ7d9pGqhgDx2Qy3fK4icuwcCjIaT1xRsRPsUXsTCXglvm3ah2K79YOp4L6r5KQH4O1xkrynEWSbWGB3qhGM2vZIeBXTigwWCbv3Ms0jxcNHl4MFVEM2ldBa5CisGkNk7qEQItqZC0XKhCbBLIfmfW0mqXt1Ybrna5Ztl9Q4tcKlYQCq4CilLHa7g6bUk9hg8WO0bFoOWNBxthL4hAU6KRHNcDEzLtiAIaajbw5Hq6miqG0uf3k3MXtRx5NGs9FnhkCARllXBq6L8QNv54PJBN6l5f8Zjk4xQeqB8hEllRWjkYCkzSQsssihuDP4jb54wle2T4uAYEJQ4pCjF7pIlBS65IO5dAXeTEfe6Xx10WaYonWiqhEV9pMOCYHOPVXMtCh1iUKcxYKWnyvgyfF5um1zPCxFA5BxDXwJiUyedYsdaBwOEU3f0IDs2nqNpDNdqBYZgIAZb8ewKwmGWntYhpQdWHr14Q6olhLjnbaQj70fhhcUc9hZmJxKxhRJVL8YjmH3P4plgcnHHLOlzfm6iJkfu6jssGRZVqmTyfEOA3pF31Q7UPBb4bUsTgy6ck0Z2M3oX65KcqQFZWzXRru0FUGgfFBJgacNRkXqwEZasGwD1KfVtrUEZNTl7oTqwPMisc8VVfFJwRcpkPnh3Ff5nm8sTZxWrW5CE8QuaT5GMnWc1EA76rz5ZNfVfNhicat9yYGPEqc2bwhlQgzgFjFk1mxwYIsmBrWXXHx5J0CcifdRJ0PtxGKfgbO0l2xmwr4rWfOSqsAUT0t9BqX1wn5xuVHtLzgFL3Nuf62vda7YEZKe6vvQnhfGBuX1vOvvcyKUPMwIPOfFYReyhJIWdKiJ3XKLmLR1IxaaOslDv0wLVw9Vw095MxjIy0");
        navigation.clickOnSubmitButton();
    });

    it("Create gallery with title of minimum 2 chars", () => {
        createGallery.create("gr", faker.image.imageUrl());
        navigation.clickOnSubmitButton();    
    });

    it("Create gallery with title of maximum 255 chars ", () => {
        createGallery.create("m8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb", faker.image.imageUrl());
        navigation.clickOnSubmitButton();
    });

    // Negativni test case-ovi

    it("Create gallery without filled requirements", () => {
        navigation.clickOnSubmitButton();
    });

    it("Create gallery when description field exceeded maximum of 1000 chars", () => {
        createGallery.create(faker.word.verb(), faker.image.imageUrl(), "muXKBDeUwXoYIW1YjZDTJAjguhB3eAVn0jPNqE638bUz0AQtBSo1BViMBR7vUjRvQw6d0UBumOBMFMMIepBAamcL3TXbdzrsODPZkw4W5gs1TiHsGRt957ol9TsyDlaztNy2bAiv0hr7hgwcfnbsbuzN6giDHdGvThKm0pWPw0MyRTE7G7vfnurphtpUZKRjOR0FVuXJZnUvF5mj4NFccSwWBcKeiXCJNYK3WbLeCBVFOGADfvy6LsL4BOnXiCbtFvXx1tHzO1ldxievTwnOi6onIrc5r7vA2nPACj57t5U0zcbBm4O96pNYRf7fGCHfPYJdmEzg5ga4nKha47fCtK6eIaG5hcnyj2xws710bs1P9JuUETwG2ggNnznM15SeXf1Ot9qRdI1yi8mWQmB73qMQPpB79vmLheweO4nv5I0qKJWWtRIRa4wkKk8RKy38JbYZJSgpk02oXyexYmUsg0O67a26MGvsDbXTOJYuNfBiMtNXRS7nJfwk5eWg7mvGRH38NPOSQlCQb6UmiAKea159uBjIo2eq8X5XbdgqNq0UXyN4Oj2MPwRGtDrTbEmCeYLmQxn58w2Sq4ZErfcN75RMVv6JHHYmXIVe0g5DfNy7WVc9bXg3qCA2yOFrXCVESDQYb3vJHM9bCMGVuCb59mPSNHdcedHmQPPcPhbmutvWP7xnAjWRYKRYQ1awDtAnJLr44qu1ebNU19Wvd4gfB0LMDiQizuxqqoknZVE3Qc4hC1caYLGfJRdJ9w9DFiWDBhIZodqFPnM6KMluyAfXKfyuN5OsuHI8Tlo53ruNYOJNVkuEPu77BfX62g47MYtfTd79LLvFGCiOV5MbxK60FkUk5a0sZa02LcuNPSGK75RYK5v9ET89aoUYzRUctneiyYj1XcTOmCcSq6hAgmgUo6oGCGrsScpgc5PfpQgSnCgyCQkXwRq6QvHSzH2ZWhs7lDRWt4GVd7CTEhR6PUA8mTu4h4TQzisS16OqlFOTc");
        navigation.clickOnSubmitButton();
    });

    it("Create gallery without filling title tab", () => {
        createGallery.create(" ", faker.image.imageUrl());
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery without filling URL tab", () => {
        createGallery.create(faker.word.verb(), " ");
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery with title less than minimum of 2 chars ", () => {
        createGallery.create("g", faker.image.imageUrl());
        navigation.clickOnSubmitButton(); 
    });

    it("Create gallery with title more than maximum of 255 chars ", () => {
        createGallery.create("Jm8VJEq55Q0JeBw2YyZ3SB69E9yiJxyUGm20XyYi3Ip3kaXUq5Sboijn5SM3xTvIlatMsu1t314PRFH0Nq5Kz57JmuNIOkZDabtrVXGjkgcASv8Dq2dQsUsxiA4N0RHLmOc3RXaYirBrnVQCpdiZp4ZZ5XY8eNXM1Uc0oRKHd2Y0E58er8lGQM0E5pgHLt7gS7hLZcbQv8kQF50NvXQ5jTosB2lRy9mAw4gHncazojZ72kaLaUbdjqrcoJnRQ3bb", " ", faker.image.imageUrl());
        navigation.clickOnSubmitButton();
    });

    it("Create gallery with invalid URL format, w/o proper picture extension (.jpg, .png, .jpeg) ", () => {
        createGallery.create(faker.word.verb(), "https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor?w=610&ssl=1");
        navigation.clickOnSubmitButton();
    });

    it("Check option for adding more than one URL", () => {
        createGallery.create(faker.word.verb(), faker.image.imageUrl());
        navigation.clickOnAddFirstImageButton();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        navigation.clickOnSubmitButton();
    });

    it("Check option for deleting URL when there is more than one", () => {
        createGallery.create(faker.word.verb(), faker.image.imageUrl());
        navigation.clickOnAddFirstImageButton();
        cy.get(locators.createGallery.imagesUrl2).type("https://i0.wp.com/shonery.rs/wp-content/uploads/2017/07/1370016000910-il_mio_nome_e_zagor.jpg?w=610&ssl=1");
        navigation.clickOnDeleteUrlButton();
        navigation.clickOnSubmitButton();
    });

});

