describe("JSON Examples", () => {
    it("", () => {
        const example = {"first": "Jeff", "last": "Nyman"}
        cy.log(example["first"])
        cy.log(example["last"])
        cy.log(example.first + " " + example.last)

        const example_array = ["Vicki", "Bree", "Cassie"]

        cy.log(example_array[0])
        cy.log(example_array[1])

        const users = {
            "firstName": "Jeff",
            "lastName": "Nyman",
            "age": 48,
            "students": [
                {
                    "firstName": "Vicki",
                    "lastName": "Heaton"
                },
                {
                    "firstName": "Skylar",
                    "lastName": "Allton"
                },
                {
                    "firstName": "Kailee",
                    "lastName": "Allton"
                }
            ]
        }

        cy.log(users.age)
        cy.log(users.students[1].firstName)
        cy.log(users.students[2].firstName)

        const example_array_objects = [
            {
                "firstName": "Kailee",
                "lastName": "Allton",
                "age": 22
            },
            {
                "firstName": "Skylar",
                "lastName": "Allton",
                "age": 19
            },
            {
                "firstName": "Vicki",
                "lastName": "Heaton",
                "age": 32
            }
        ]

        cy.log(
            example_array_objects[0].firstName + " " +
            example_array_objects[0].lastName + " (" +
            example_array_objects[0].age + " years old)"
        )
    })
})
