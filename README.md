## INSTALLING AND RUNNING THE APP
 1. Install [Node JS](https://nodejs.org/en) on your system. 
 At least version 16.15.1 should be installed. Node is required to run and build the application.

 2. After the installation is complete, check if Node is available on your system by executing the following commands `$ node -v` and `$ npm -v` these should log the node and the node package manager versions, if the commands are not recognizable, add the Node path to your $PATH.
 3. Navigate to the repository folder
 4. Run `$ npm install` to install all depedencies
 5. When depedencies are installed you are good to go! `$ npm run start` to launch the application.

## CONFIGURING THE APP

 1. Go to ./configure.json - this is the file where you can configure all the pages you want to take a screenshot of
 2. Set URL to the correct url of the page you want to take a screenshot of
 3. In pages array include all the subpages' links' selectors (CSS selector)
 4. `$ npm run start` / E2E / START.cy.js
 5. Wait for the run to finish
 6. Your screenshots are located in cypress/screenshots/{sitename}
