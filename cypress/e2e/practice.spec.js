describe("Practice Page", () => {
    it("resolves in a browser", () => {
        cy.visit("cypress/xyzzy/index.html")
        cy.get("#navlist").click()
        cy.get("#practice").click()
    })
})
