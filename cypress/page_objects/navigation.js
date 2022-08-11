class Navigation {
    get loginButton() {
       return cy.get("a[href='/login']");
    }

    get logoutButton() {
        return cy.get("a[role='button ']");
    }

    get registrationButton() {
        return cy.get("a[href='/register']");
    }

    get createGalleryButton() {
        return cy.get("[href='/create']");
    }

    get myGalleriesButton() {
        return cy.get('[href="/my-galleries"]');
    }

    get allGalleriesButton() {
        return cy.get('[href="/"]').last();
    }

    get galleryAppButtonMain() {
        return cy.get('[href="/"]').first();
    }


    clickOnAllGalleriesButton() {
        this.allGalleriesButton.click();
    }

    clickOnMyGalleriesButton() {
        this.myGalleriesButton.click();
    }

    clickOnGallerieAppButtonMain() {
        this.galleryAppButtonMain.click();
    }
    

    clickOnCreateGalleryButton() {
        this.createGalleryButton.click();
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }

    clickOnLogoutButton() {
        this.logoutButton.click();
    }

    clickOnRegistrationButton() {
        this.registrationButton.click();
    }
 
}

export const navigation = new Navigation();

