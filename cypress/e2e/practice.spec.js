describe("Practice Page", () => {
    it("resolves in a browser", () => {
        cy.visit("cypress/xyzzy/index.html")
        cy.get("#navlist").click()
        cy.get("#practice").click()

        cy.get("header").screenshot()
        cy.screenshot({ capture: "fullPage" })

        cy.get("#focus-and-blur").scrollIntoView()
        cy.get("header").scrollIntoView()
    })
})
