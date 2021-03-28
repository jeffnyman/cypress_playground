describe("Comments API", () => {
    var comments = new Array()
    let random_text = Math.random().toString(36).substring(1)
    let random_post_id = Math.round(Math.random() * (300 - 1) + 1)

    it("quick check of data", () => {
        cy.log(random_text)
        cy.log(random_post_id)
    })

    it("create a new comment", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                "body": random_text,
                "postId": random_post_id
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })

    it("validate information from the latest comment", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))

            body.forEach((item) => {
                comments.push(item["body"])
            })
        }).then(() => {
            var latest_comment = comments[comments.length - 1]

            expect(latest_comment).to.equal(random_text)
        })
    })

    it("delete the latest comment", () => {
        cy.request({
            method: "DELETE",
            //url: `http://localhost:3000/comments/${comments.length}`
            url: "http://localhost:3000/comments/" + comments.length
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})
