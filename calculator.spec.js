import { describe } from 'mocha';

describe('Calculator Tests', () => {
  it('handles x^2 correctly', () => {
    cy.visit('/');
    cy.get('button').contains('4').click();
    cy.get('button').contains('x^2').click();
    cy.get('.display').should('have.text', '16');
  });

  it('handles x^y correctly', () => {
    cy.visit('/');
    cy.get('button').contains('2').click();
    cy.get('button').contains('x^y').click();
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('3');
    });
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '8');
  });

  it('handles +/- correctly', () => {
    cy.visit('/');
    cy.get('button').contains('7').click();
    cy.get('button').contains('±').click();
    cy.get('.display').should('have.text', '-7');
  });

  it('handles decimal point correctly', () => {
    cy.visit('/');
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '11.5');
  });
});
    it('handles x^2 correctly', () => {
      cy.visit('/');
      cy.get('button').contains('4').click();
      cy.get('button').contains('x^2').click();
      cy.get('.display').should('have.text', '16');
    });
  
    it('handles x^y correctly', () => {
      cy.visit('/');
      cy.get('button').contains('2').click();
      cy.get('button').contains('x^y').click();
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('3');
      });
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '8');
    });
  
    it('handles +/- correctly', () => {
      cy.visit('/');
      cy.get('button').contains('7').click();
      cy.get('button').contains('±').click();
      cy.get('.display').should('have.text', '-7');
    });
  
    it('handles decimal point correctly', () => {
      cy.visit('/');
      cy.get('button').contains('1').click();
      cy.get('button').contains('0').click();
      cy.get('button').contains('.').click();
      cy.get('button').contains('5').click();
      cy.get('button').contains('=').click();
      cy.get('.display').should('have.text', '11.5');
    });
  });
  