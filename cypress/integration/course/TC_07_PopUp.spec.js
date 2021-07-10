describe('Pop Up Test Suite', () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/samplepath/differentalerttypes.html')
    });

    it.skip('Alert - First Way', () => {
        cy.on('window:alert', alertText => {
            expect(alertText).to.eql('I\'m an Alert Box');
        })
        cy.get('button#alert').click()
    });

    it.skip('Alert - Second Way - Multiple Alerts', () => {
        const fn = cy.stub()
        cy.on('window:alert', fn)
        cy.get('button#miltiplealert').click().then(() => {
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
            
    });

    it.skip('Confirm - First Way', () => {
        cy.on('window:confirm', confirmTxt => {
            expect(confirmTxt).to.eql('I\'m a Confirm Box');
            // return false
        })
        cy.get('button#confirm').click()
    });

    it.skip('Confirm - Second Way', () => {
        const stub = cy.stub()
        stub.onFirstCall().returns(true)
        cy.on('window:confirm', stub)
        cy.get('button#confirm').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')
        })
    });

    it.skip('Prompt', () => {
        cy.window().then(win => {
            const stub = cy.stub(win, 'prompt')
            stub.returns('Avi')
            cy.get('button#prompt').click()
        }) 
    });

    it.skip('Custom Pop Up Dialog from hidden fields', () => {
        cy.get('button#cusdiag').click()
        cy.get('input#name').type('UserName')
        cy.get('input#password').type('Password')
        cy.contains('Submit').click()
    });

    it.skip('Custom Pop Up Dialog from function', () => {
        cy.get('button#moddiag').click()
        cy.contains('Ok').click()
        // cy.contains('Close').click()
    });

    it.only('Window pop up', () => {
        const pop_url = "https://www.youtube.com/"
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })
        cy.get('button#winpop').click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
        cy.window().then(win => {
            win.location.href = pop_url
            cy.get('input#search').type('haha{enter}')
        })

    });
});