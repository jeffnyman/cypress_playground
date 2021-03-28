describe("PUT Request - /posts endpoint", () => {
    it("updates an existing post", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                "title": "Jeff Example - Modified",
                "author": "Jeff Nyman - Modified"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})
