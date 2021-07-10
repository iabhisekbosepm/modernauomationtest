describe('Document Test Suite Commands', () => {

    before(() => {
        cy.visit('/login')
    });

    it.skip('CY Test Commands for Document- Title', () => {
        cy.title().then(txt => {
            expect(txt).to.eql('Kyubi');
        })
    });

});