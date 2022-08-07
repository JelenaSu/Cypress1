class CreateGallery {

    get titleInput() {
        return cy.get("#title");
    }

    get descriptionInput() {
        return cy.get('#description');
    }

    get imagesUrl() {
        return cy.get('[placeholder="image url"]');
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
        return cy.get("form > :nth-child(4)");
    } 
        
    create(title, url) {
        this.titleInput.type(title);
        this.imagesUrl.type(url);
        this.submitButton.click();
    }
}
export const createGallery = new CreateGallery();
