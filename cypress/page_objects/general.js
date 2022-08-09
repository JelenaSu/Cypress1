class General {
    get headerTitle() {
        return cy.get("h1");
    }

    get errorMessage() {
        return cy.get('p[class="alert alert-danger"]');
    }

}

export const general = new General();