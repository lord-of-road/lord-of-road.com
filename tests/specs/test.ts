// https://docs.cypress.io/api/introduction/api.html

describe("Site root test", () => {
    it("Visits the app root url", () => {
        cy.visit("http://localhost:8080")
        cy.fixture("example.json").then((example) => {
            cy.contains("h1", example.welcome_message)
        })
    })
})
