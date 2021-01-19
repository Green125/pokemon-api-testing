describe("API Testing with Cypress", () => {
  beforeEach(() => {
    cy.request("https://pokeapi.co/api/v2/pokemon/25").as("pikachu")
  })

  it("Validate the header", () => {
    cy.get("@pikachu")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8")
  })

  it("Validate the status code", () => {
    cy.get("@pikachu")
      .its("status")
      .should("equal", 200)
  })

  it("Validate the pokemon's name", () => {
    cy.get("@pikachu")
      .its("body")
      .should("include", { name: "pikachu" })
  })

  it("checks the height", () => {
    cy.get("@pikachu")
      .its("body")
      .should("include", { height: 4 })
  })

  it("checks the id", () => {
    cy.get("@pikachu")
      .its("body")
      .should("include", { id: 25 })
  })

  it("checks the moves length", () => {
    cy.get("@pikachu")
      .its("body.moves.length")
      .should("equal", 81)
  })

  it("validate first move name", () => {
    cy.get("@pikachu")
      .its("body.moves.0.move.name")
      .should("equal", "mega-punch")
  })

  it("validates first move url", () => {
    cy.get("@pikachu")
      .its("body.moves.0.move.url")
      .should("equal", "https://pokeapi.co/api/v2/move/5/")
  })

  it("validates last move name", () => {
    cy.get("@pikachu")
      .its("body.moves.80.move.name")
      .should("equal", "nuzzle")
  })

  it("validates the last move url", () => {
    cy.get("@pikachu")
      .its("body.moves.80.move.url")
      .should("equal", "https://pokeapi.co/api/v2/move/609/")
  })

  it("validates the held items length", () => {
    cy.get("@pikachu")
      .its("body.held_items.length")
      .should("equal", 2)
  })

  it("validates the name of the first item among the held items", () => {
    cy.get("@pikachu")
      .its("body.held_items.0.item.name")
      .should("equal", "oran-berry")
  })

  it("validates the name of the second item among the held items ", () => {
    cy.get("@pikachu")
      .its("body.held_items.1.item.name")
      .should("equal", "light-ball")
  })
})
