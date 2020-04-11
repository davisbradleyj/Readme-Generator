const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./assets/api.js")
const generateMarkdown = require("./assets/generateMarkdown.js")

// add question block x
// async?  function?
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
        message: "Who are the other contributors?",
        name: "contributing"
    }
];

// write md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Success!")
    })
}

function init() {
    // initialize questions
    inquirer.prompt(questions)
        // how to store answers
        .then(function (data) {
            // pass data through to api, and use return
            api(data).then(result => {
                console.log(result)
                // pass data through to markdown, 
                const las = generateMarkdown(data, result.data)
                // pass through of markdown to file write
                console.log(las)
                writeToFile("example.md", las)
            })
                // prevent defaults/error handling    
                .catch(function (err) {
                    console.log(err);
                })
        })
        // prevent defaults/error handling
        .catch(function (err) {
            console.log(err);
        })
}
init();

