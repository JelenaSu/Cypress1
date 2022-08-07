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

    get submitButton() {
        return cy.get("form > :nth-child(4)");
    }

    get createGalleryButton() {
        return cy.get("[href='/create']");
    }

    get addFirstImage() {
        return cy.get("form > :nth-child(3) > :nth-child(3)");
    } 
    
    get addSecondImage() {
        return cy.get("form > :nth-child(3) > :nth-child(4)");
    } 
        
    get addThirdImage() {
        return cy.get("form > :nth-child(3) > :nth-child(5)");
    } 
       
    get deleteUrl() {
        return cy.get(":nth-child(3) > .input-group > .input-group-append > :nth-child(1) > .fas");
    }

    clickOnAddFirstImageButton() {
        this.addFirstImage.click();
    }

    clickOnDeleteUrlButton() {
        this.deleteUrl.click();
    }

    clickOnCreateGalleryButton() {
        this.createGalleryButton.click();
    }

    clickOnSubmitButton() {
        this.submitButton.click();
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

