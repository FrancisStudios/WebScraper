import { config } from "../../configure.json";
import { appConfig } from "../../app.config.json"


describe(appConfig.name, () => {
  it(config.sitename, () => {

    /* THIS PART IS THE ACTUAL SCRAPER */

    cy.visit(config.URL);

    /* LOGIN METHOD */

    if(config.login.isLoginApplicable){
      cy.get(config.login.usernameSelector).type(config.login.username);
      cy.get(config.login.passwordSelector).type(config.login.password);
      cy.get(config.login.submitSelector).click();
      cy.wait(config.universalWaitTime);

      /* SWEEPING THROUGH ACTION LINKS TO ARRIVE ON THE STARTING PAGE */
      if(config.login.actionLinks.length > 0){
        config.login.actionLinks.forEach((link)=>{
          cy.get(link).click();
          cy.wait(config.universalWaitTime);
        });
      }
    }

    /* USER DEFINED PAGE SNAPPER */

    if (config.usePages) {
      config.pages.forEach((page, $i)=>{
        if (page===appConfig.tokens[0]) snapScreen(`/${config.sitename}/${appConfig.identifiers[0]}`);
          else{
            cy.get(page).click();
            cy.wait(config.universalWaitTime);
            snapScreen(`/${config.sitename}/subpages/${$i}`);
          }
      });
    }
  });
});

/* 
* CUSTOMIZABLE HELPERS
*/
const snapScreen = (URI) => { 
  cy.screenshot(URI); 
}