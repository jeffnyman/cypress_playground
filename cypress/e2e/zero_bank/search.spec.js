describe("Zero Bank Searching", () => {
    before(() => {
        cy.visit("http://zero.webappsecurity.com/")
    })

    it("search results returned after submission of search term", () => {
        cy.get("#searchTerm").type("bank").type("{enter}")
        cy.get("h2").should("have.text", "Search Results:")
        cy.get("body").should("contain", "The following pages were found for the query: bank")
        cy.get("h2").siblings("ul").children("li").should("have.length", 2)
    })

    it("correctly indicates when there are no search results", () => {
        cy.get("#searchTerm").type("tester").type("{enter}")
        cy.get("h2").should("have.text", "Search Results:")
        cy.get("body").should("contain", "No results were found for the query: tester")
        cy.get("h2").siblings("ul").should("have.length", 0)
    })
})
