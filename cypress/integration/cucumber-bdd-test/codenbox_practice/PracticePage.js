
class PracticePage{

    static loadHomePage(){
       cy.visit('http://codenboxautomationlab.com/')
       cy.url().should('include', 'codenbox')
    }

    static clickonPracticeBtn(){
        cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({force:true})

    }

    static getTitile(pageTitle){
        cy.get('.page-title').invoke('text').then((text1) =>{
            expect(text1.trim()).to.equal(pageTitle)
        })
    }

    static getDropdownOption(){
        cy.get('#dropdown-class-example').select('Selenium')
    }

    static selectSelenium(){
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
    }


}

export default PracticePage;