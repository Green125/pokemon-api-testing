describe("Validate key information about Weedle From The Pokemon API", () => {
  beforeEach(() => {
    cy.request("https://pokeapi.co/api/v2/pokemon/13").as("weedle")
  })

  it("Validate the header", () => {
    cy.get("@weedle")
      .its("headers")
      .its("content-type")
      .should("include", "application/json; charset=utf-8")
  })

  it("Validate the status code", () => {
    cy.get("@weedle")
      .its("status")
      .should("equal", 200)
  })

  it("Validate the pokemon's name", () => {
    cy.get("@weedle")
      .its("body")
      .should("include", { name: "weedle" })
  })

  it("checks the height", () => {
    cy.get("@weedle")
      .its("body")
      .should("include", { height: 3 })
  })

  it("checks the id", () => {
    cy.get("@weedle")
      .its("body")
      .should("include", { id: 13 })
  })

  it("checks the number of different moves Weedle can do", () => {
    cy.get("@weedle")
      .its("body.moves.length")
      .should("equal", 4)
  })

  it("validate first move name", () => {
    cy.get("@weedle")
      .its("body.moves.0.move.name")
      .should("equal", "poison-sting")
  })

  it("validates first move url", () => {
    cy.get("@weedle")
      .its("body.moves.0.move.url")
      .should("equal", "https://pokeapi.co/api/v2/move/40/")
  })

  it("validates last move name", () => {
    cy.get("@weedle")
      .its("body.moves.3.move.name")
      .should("equal", "electroweb")
  })

  // TODO add last move URL

  it("validates the number of held items that Weedle has", () => {
    cy.get("@weedle")
      .its("body.held_items.length")
      .should("equal", 0)
  })

  it("validates fifth stat of base stats", () => {
    cy.get("@weedle")
      .its("body.stats.4.base_stat")
      .should("equal", 20)
  })

  it("validates order", () => {
    cy.get("@weedle")
      .its("body.order")
      .should("equal", 17)
  })
})
