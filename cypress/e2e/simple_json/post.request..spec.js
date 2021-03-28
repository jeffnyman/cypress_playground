describe("POST Request - /posts endpoint", () => {
    var titles = new Array()
    let random_title = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1)

    it("creates a new post", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "title": random_title,
                "author": "AutoTest"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })

    it("able to validate information from the latest post", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))

            body.forEach((item) => {
                titles.push(item["title"])
            })
        }).then(() => {
            var latest_post = titles[titles.length - 1]

            expect(latest_post).to.equal(random_title)
        })
    })
})
