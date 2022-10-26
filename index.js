// packages needed for this application
const fs=require("fs");
const inquirer=require("inquirer");
const utils=require("utils");
const ReadmeGen=require("ReadmeGen");

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of repository?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the repository?',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What is the installation version?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What of usage was used in the repository?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Would like to put contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Would you like to have a test instructions?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like for the repository?',
        choices: ['MIT', 'ISC', 'IPL 1.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your perferred email contact information?',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();