class RegistrationPage {
    
    get firstName() {
        return cy.get("#first-name");
    }

    get lastName() {
        return cy.get("#last-name");
    }

    get emailInput() {
        return cy.get("#email");
    }

    get passwordInput() {
        return cy.get("#password");
    }

    get passwordConfirmation() {
        return cy.get("#password-confirmation");
    }

    get formCheck() {
        return cy.get("input[class='form-check-input']");
    }

    get submitButton() {
        return cy.get("button[type='submit']");
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
