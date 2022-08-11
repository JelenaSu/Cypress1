class MyGalleries {

    get inputFilterSearch() {
        return cy.get('[class="form-control"]');
    }

    get filterSearchButton() {
        return cy.get('[type="button"]');
    }

    get newCreatedDivGrid() {
        return cy.get('.grid > :nth-child(1)');
    }

    get h2NewTitle() {
        return cy.get(':nth-child(1) > h2 > .box-title');
    }

}

export const myGalleries = new MyGalleries()