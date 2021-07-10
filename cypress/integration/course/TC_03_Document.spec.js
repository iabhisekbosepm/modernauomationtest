describe('Document Test Suite Commands', () => {

    before(() => {
        cy.visit('#/login?_k=k4oq8m')
    });

    it.skip('Document Test Commands - Title Properties', () => {
        cy.document().should(doc => {
            const titleText = doc.title
            expect(titleText).to.eql('Conduit');
        })
    });

    it.skip('Document Test Commands - Get Width & Height', () => {
        cy.document().should(doc => {
            const docObj = Cypress.$(doc)
            let docHeight =  docObj.height()
            let docWidht =  docObj.width()
            console.log(`Screen Height is ${docHeight}`)
            console.log(`Screen Width is ${docWidht}`)
           Cypress.$(doc.body).css('background-color', 'red')
        })
    });

    it.skip('Document Test Commands - Cookies', () => {
        cy.document().should(doc => {
            // CREATE
            doc.cookie = "username=Console Log"
            // READ
            console.log(doc.cookie)
            // UPDATE
           doc.cookie = "username=Console Log TEST"
           console.log(doc.cookie)
            // CLEAR
           // doc.cookie = "username="
        })
    });

    it.skip('CY Test Commands for Document- Title', () => {
        cy.title().then(txt => {
            expect(txt).to.eql('Conduit');
        })
    });

    it.skip('CY Test Commands for Document - Set Viewport', () => {
        cy.viewport(1000, 660)
    });

    it.only('CY Test Commands for Document - Cookies', () => {
            // CREATE
            cy.setCookie('channelName', 'Console Log')
            // READ
            cy.getCookie('channelName')
            // UPDATE
            cy.setCookie('channelName', 'Console log TEST')
            cy.getCookie('channelName')
            // CLEAR
           cy.clearCookie('channelName')
            cy.getCookie('channelName')
    });
});