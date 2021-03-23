describe("Authentication", () => {
    before(() => {
        cy.log("Before all tests.")
    })

    after(() => {
        cy.log("After all tests.")
    })

    beforeEach(() => {
        cy.log("Before each test.")
    })

    afterEach(() => {
        cy.log("After each test.")
    })

    it("test scenario 01", () => {
        cy.log("Executing test scenario 01.")
        expect(true).to.equal(true)
    })

    it("test scenario 02", () => {
        cy.log("Executing test scenario 02.")
        expect(false).to.equal(false)
    })
})
