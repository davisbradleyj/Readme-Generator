const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
      },
      {
        type: "input",
        message: "what is the project name?",
        name: "title"
      },
      {
        type: "input",
        message: "Please write a description of the project?",
        name: "description"
      },
      {
        type: "input",
        message: "What kind of license?",
        name: "license"
      },
      {
        type: "input",
        message: "What command should be executed to install dependencies?",
        name: "dependencies"
      },
      {
        type: "input",
        message: "What command should be executed to run applicable tests?",
        name: "tests"
      },
      {
        type: "input",
        message: "Who are the other contributors?",
        name: "contributing"
    }
]);
}

function generateMarkdown(response) {
    return `
  # ${response.title}
  [![GitHub License](http://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/davisbradley/readme-generator)
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
    * [Installation](#Installation)
  
    * [Usage](#Usage)
    
    * [License](#License)
    
    * [Contributing](#Contributing)
    
    * [Tests](#Tests)
    
    * [Questions](#Questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  ${response.installation}
  
  ### Usage 
  
  ${response.usage}
  
  ### License
  
  This project is licensed under the ${response.license} License
  
  ### Contributing
  
  ${response.contributing}
  
  ### Tests
  
  To run tests, please execute the following command(s):
  
  ${response.tests}
  
  ### Questions
  
  ${response.github}<img src="https://avatars3.githubusercontent.com/u/ + " alt="avatar" style="border-radius: 16px" width="30" />}
  
  If you have any questions about the repository, open an issue or contact [davisbradleyj](https://api.github.com/users/davisbradleyj) directly at $null.
  `;
}

async function init() {
    try {
      const response = await promptUser();
  
      const readme = generateMarkdown(response);
  
      await writeFileAsync("testreadme.md", readme);
  
      console.log("Successfully wrote to testreadme.md");
    } catch(err) {
      console.log(err);
    }
 }

init();