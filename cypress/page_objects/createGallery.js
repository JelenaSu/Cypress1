class CreateGallery {

    get errorDescriptionMessage() {
        return cy.get('[class="alert alert-danger"]');
    }

    get createForm() {
        return cy.get('form');
    }

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get('#description');
    }

    get imageUrl() {
        return cy.get('[placeholder="image url"]').first();
    }

    get imageUrl2() {
        return cy.get('[placeholder="image url"]').last();
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
        
    get submitButton() {
        return cy.get('button[type="submit"]').first();
    } 

    get cancelButton() {
        return cy.get('form > :nth-child(5)');
    }



    clickOnAddFirstImageButton() {
        this.addFirstImage.click();
    }

    clickOnDeleteUrlButton() {
        this.deleteUrl.click();
    }

    clickOnSubmitButton() {
        this.submitButton.click();
    }

  
    create(title, url, description = " ") {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrl.type(url);
        this.submitButton.click();
    }

    createMoreThanOneUrl(title, url, url2, description = " ") {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrl.type(url);
        this.addFirstImage.click();
        this.imageUrl2.type(url2);
        this.submitButton.click();
    }

    createMoreThanOneUrlAndDelete(title, url, url2, description = " ") {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageUrl.type(url);
        this.addFirstImage.click();
        this.imageUrl2.type(url2);
        this.deleteUrl.click();
        this.submitButton.click();
    }
}
export const createGallery = new CreateGallery();
