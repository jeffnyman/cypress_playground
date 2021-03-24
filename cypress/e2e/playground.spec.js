describe("Playground Application", () => {
    it("resolves in a browser", () => {
        cy.visit("cypress/xyzzy/index.html")
        cy.url().should("include", "xyzzy")
        cy.get("h1").should("be.visible")
    })

    it("utilizes the navigation", () => {
        cy.get("#navlist").click()
        cy.get("#planets").click()
    })
})
