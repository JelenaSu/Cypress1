class RegistrationPage {
    
    get firstName() {
        return cy.get("#first-name");
    }

    get labelFirstName() {
        return cy.get(':nth-child(1) > label');
    }

    get lastName() {
        return cy.get("#last-name");
    }

    get labelLastName() {
        return cy.get(':nth-child(2) > label');
    }

    get emailInput() {
        return cy.get("#email");
    }

    get labelEmail() {
        return cy.get(':nth-child(3) > label');
    }

    get passwordInput() {
        return cy.get("#password");
    }

    get labelPassword() {
        return cy.get(':nth-child(4) > label');
    }

    get passwordConfirmation() {
        return cy.get("#password-confirmation");
    }

    get labelPasswordConfirmation() {
        return cy.get(':nth-child(5) > label');
    }

    get formCheck() {
        return cy.get("input[class='form-check-input']");
    }

    get labelFormCheck() {
        return cy.get('.form-check-label');
    }

    get submitButton() {
        return cy.get("button[type='submit']");
    }

    get mainDivFormGroup() {
        return cy.get('.container form');
    }

    get messageErrorAlert() {
        return cy.get('.alert');
    }

    registration(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.passwordConfirmation.type(passwordConfirmation);
        this.formCheck.click();
        this.submitButton.click();
    }

    registrationWithoutFormCheck(firstName, lastName, email, password, passwordConfirmation) {
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.passwordConfirmation.type(passwordConfirmation);
        this.submitButton.click();
    }

  }

export const registrationPage = new RegistrationPage();
