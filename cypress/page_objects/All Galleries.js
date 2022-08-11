class AllGalleries {

    get inputFilterSearch() {
        return cy.get('[class="form-control"]');
    }

    get filterSearchButton() {
        return cy.get('[class="btn btn-outline-secondary input-button"]');
    }

    get loadMoreButton() {
        return cy.get('[class="btn btn-custom"]');
    }

}

export const allGalleries = new AllGalleries()