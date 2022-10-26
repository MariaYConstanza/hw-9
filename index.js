// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("utils");
const ReadmeGen = require("ReadmeGen");

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of repository?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt title, type title again.'}
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the repository?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt description, type repository description again.'}
        },
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What is the installation version?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt installation, type installation version again.'}
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What kind of usage was used in the repository?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt usage, type the usages again.'}
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Would like to put contribution guidelines?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt contribution, type the contribution guidelines again.'}
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'Would you like to have a test instructions?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt test, type the test instructions again.'}
        },
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like for the repository?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt license, choose license type again.'}
        },
        choices: ['MIT', 'ISC', 'IPL 1.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt username, input your GitHub username again.'}
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your perferred email contact information?',
        validate: value => {
            if (value) {return true} else {return 'Unpromt contact, input your perferred email infomation again.'}
        },
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("README file has been successfully created!!")
        }
    })
}

// Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(data){
        fs.writeFile("README.md", genMarkdown(data));
    })
};

// Function call to initialize app
init();