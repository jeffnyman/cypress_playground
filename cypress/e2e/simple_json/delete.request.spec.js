describe("DELETE Request - /posts endpoint", () => {
    it("deletes an existing post", () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/6"
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})
