describe('My First Test', () => {
    it('Login Google Page', () => {
        cy.visit('https://www.google.com/')
        cy.xpath('//a[contains(text(),"Gmail")]').click();
      cy.title().should('eq', 'Gmail: Free, Private & Secure Email | Google Workspace')
      cy.title().debug()
      })
  })