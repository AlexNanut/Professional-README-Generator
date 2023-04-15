// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",

    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project",
        
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
      },
       
      {
        type: "input",
        name: "usage",
        message:
          "State the languages or technologies associated with this project.",
      },
      {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },

      {
        type: "input",
        name: "name",
        message: "State your full name",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let file_contents = generateMarkdown(data)
    console.log(file_contents)
    fs.writeFile(fileName, file_contents, err => {
        if (err) {
          console.error(err);
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then ((answers)=>{
        console.log(answers)
        writeToFile("output/README.md",answers)
    })
}

// Function call to initialize app
init();
