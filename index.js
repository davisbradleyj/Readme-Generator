const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")

const questions = [
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
        message: "Who are the other contributors??",
        name: "contributing"
    }
];

inquirer
    .prompt(questions)
    .then(function(response){
    console.log(response)
})

function writeToFile(fileName, response) {
    fs.writeFileAsync(fileName,response,function(err){
        if(err){
            console.log(err)
        }
    console.log("Successfully wrote to readme")
    })
}


function init() {

}

writeToFile("newReadMe.md",response);
init();
