describe("GET Request - /posts endpoint", () => {
    var result;

    it("validate successful endpoint connection, approach 1", () => {
        result = cy.request("http://localhost:3000/posts")
        result.its("status").should("equal", 200)
    })

    it("validate successful endpoint connection, approach 2", () => {
        cy.request("GET", "http://localhost:3000/posts").then((response) => {
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal("OK")
            expect(response.duration).to.be.below(2000)
        })
    })

    it("validate response provides correct values", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[0]).has.property("title", "json-server")

            body.forEach((item) => {
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + item["author"] + " & Title: " + item["title"])
            });
        })
    })
})
