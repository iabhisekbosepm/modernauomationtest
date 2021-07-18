/// <reference types="cypress" />

const { random } = require("lodash");

context("Login Page",{'baseUrl':'https://app.kyubi.io'}, () => {
    it("must log in user sucessfully", ()=> {
        cy.visit("http://automation-fe.s3-website-us-east-1.amazonaws.com/");

        cy.get(':nth-child(2) > .inFormField > input').type("ujjal.das@tier5.in");
        cy.get(':nth-child(3) > .inFormField > input').type("123456");
        cy.get('.btn').click();

        cy.get(':nth-child(6) > .leftMenuLink').click();
        cy.get('.creatUserBtn > span').click();
        // cy.get('.triggerNodes > .dndnode').drag('div.react-flow__pane');
        // cy.get('.filterNodes > .dndnode').drag('div.react-flow__pane');
        // cy.get('.btnEditNode').trigger('mouseover').click();

        cy.get('.triggerNodes > .dndnode')
        .drag('.dashInnerStructure > .automationDnD > div > .react-flow > .react-flow__renderer.react-flow__zoompane > .react-flow__pane',{force:true});
        cy.get('.filterNodes > .dndnode')
        .drag('.dashInnerStructure > .automationDnD > div > .react-flow > .react-flow__renderer.react-flow__zoompane > .react-flow__pane',{force:true});
    });
})