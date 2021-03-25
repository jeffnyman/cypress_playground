describe("Authentication", () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it("allows submitting a request for a forgotten password", () => {
        cy.get("#signin_button").click()
        cy.get("a[href*='forgot-password.html']").click()
        cy.get("#user_email").type("tester@testing.com")
        cy.contains("Send Password").click()
        cy.get("body").should("contain", "Your password will be sent to the following email: tester@testing.com")
    })
})
