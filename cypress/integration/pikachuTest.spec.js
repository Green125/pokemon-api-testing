describe('API Testing with Cypress', () => {
  beforeEach(() => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pikachu');
  });

  it('Validate the header', () => {
    cy.get('@pikachu')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('Validate the status code', () => {
    cy.get('@pikachu')
      .its('status')
      .should('equal', 200);
  });

  it('Validate the pokemon\'s name', () => {
    cy.get('@pikachu')
      .its('body')
      .should('include', { name: 'pikachu' });
  });

  it('checks the height', ()=> {
    cy.get('@pikachu')
      .its('body')
      .should('include', { height: 4 });
  });

  it('checks the id', ()=> {
    cy.get('@pikachu')
      .its('body')
      .should('include', { id: 25 });
  });

  it('checks the moves length', ()=> {
    cy.get('@pikachu')
      .its('body.moves.length')
      .should('equal', 81)
  });

  it('validate first move name', ()=> {
    cy.get('@pikachu')
      .its('body.moves.0.move.name')
      .should('equal', 'mega-punch')
  });

  it('validatesfirst move url', ()=> {
    cy.get('@pikachu')
      .its('body.moves.0.move.url')
      .should('equal','https://pokeapi.co/api/v2/move/5/')
  });

  it('validates second move name',()=> {
    cy.get('@pikachu')
      .its('body.moves.1.move.name')
      .should('equal', 'pay-day')
  });

  it('validates the second move url', ()=> {
    cy.get('@pikachu')
      .its('body.moves.1.move.url')
      .should('equal','https://pokeapi.co/api/v2/move/6/')
  });

  it('validates third move name', ()=> {
    cy.get('@pikachu')
      .its('body.moves.2.move.name')
      .should('equal', 'thunder-punch')
  });

  it('validates third move url', () => {
    cy.get('@pikachu')
      .its('body.moves.2.move.url')
      .should('equal','https://pokeapi.co/api/v2/move/9/')
  });

  it('validates last move name', ()=> {
    cy.get('@pikachu')
      .its('body.moves.80.move.name')
      .should('equal', 'nuzzle')
  });

  it('validates last move url', ()=> {
    cy.get('@pikachu')
      .its('body.moves.80.move.url')
      .should('equal', 'https://pokeapi.co/api/v2/move/609/')
  });
});
