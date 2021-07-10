describe('Shadow DOM', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/samplepath/shadowDOM.html')
    })

    it('Assert H2 text within Light DOM', () => {
        cy.get('h2')
            .should('have.text', 'I belong to Regular/Light Dom')
    });

    it('Type to Textbox within Light DOM', () => {
        cy.get('input#channelname')
            .type('CONSOLE LOG TEST')
            .should('have.value', 'CONSOLE LOG TEST')
    });

    it('Assert H2 text within Shadow DOM', () => {
        cy.get('button').click()
        cy.get('div#shadowHost')
            .shadow()
            .find('h2')
            .should('have.text', 'I belong to Shadow DOM')
    });

    it('Type to Textbox within Shadow DOM', () => {
        cy.get('button').click()
        // cy.get('input#name')
        //     .type('CONSOLE LOG TEST')
        //     .should('have.value', 'CONSOLE LOG TEST')
        cy.get('div#shadowHost')
            .shadow()
            .find('input#name')
            .type('CONSOLE LOG TEST')
            .should('have.value', 'CONSOLE LOG TEST')
    });

    it('External Website', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
            .shadow()
            .find('app-toolbar input#input')
            .type('Software Testing')
    });

    it('Using jQuery', () => {
        cy.get('button').click()
        cy.get('div#shadowHost').should(e => {
            const [dom] = e.get()
            expect(dom.shadowRoot.querySelector('h2').textContent).to.eql('I belong to Shadow DOM');
            // dom.shadowRoot.querySelector('input#name').value = 'CONSOLE LOG TEST'
            dom.shadowRoot.getElementById('name').value = 'CONSOLE LOG TEST'
        })
    });

    it.only('Config includeShadowDom - equal to True', () => {
        cy.get('button').click()
        cy.get('h2')
            .contains('I belong to Shadow DOM')
            .should('be.visible')
        cy.get('input#name').type('CONSOLE LOG TEST')
            .should('have.value', 'CONSOLE LOG TEST')
    });

    it('Config includeShadowDom equal to True as option', () => {
        cy.get('button').click()
        cy.get('h2', { includeShadowDom: true })
            .contains('I belong to Shadow DOM')
            .should('be.visible')
        cy.get('input#name', { includeShadowDom: true }).type('CONSOLE LOG TEST')
            .should('have.value', 'CONSOLE LOG TEST')
    });

    it('External Website - Config includeShadowDom	equal to True', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
            .find('app-toolbar input#input')
            .type('Software Testing')
    });
});