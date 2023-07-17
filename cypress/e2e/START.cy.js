import { config } from "../../configure.json";
import { appConfig } from "../../app.config.json"


describe(appConfig.name, () => {
  it(config.sitename, () => {

    /* THIS PART IS THE ACTUAL SCRAPER */
    cy.visit(config.URL);

    /* USER DEFINED PAGE SNAPPER */
    if (config.usePages) {
      config.pages.forEach((page, $i)=>{
        if (page===appConfig.tokens[0]) snapScreen(`/${config.sitename}/${appConfig.identifiers[0]}`);
          else{
            cy.get(page).click();
            cy.wait(config.universalWaitTime);
            cy.screenshot(`/${config.sitename}/subpages/${$i}`);
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