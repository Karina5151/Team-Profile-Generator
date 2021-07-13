const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');
const generateHTML = require(`./src/generateHTML`);

// Array for all added employees
const teamStaff = [];

// Gives options to add an employee or exit the application
const actionMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose an option:",
            choices: ["Add Engineer to Team", "Add Intern to Team", "Exit Application"],
            name: "addEmployee"
        }
    ])
        .then(resp => {
            switch (resp.addEmployee) {
                case "Add Engineer to Team":
                    addEngineer();
                    break;

                case "Add Intern to Team":
                    addIntern();
                    break;

                case "Exit Application":
                    exitApp();
                    break;

                default:
                    break;
            }
        })
}

// Displays questions for adding Engineers
const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What's the engineer's employee ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What's the engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What's the engineer's GitHub username?",
            name: "gitHub"
        },
    ])
        .then(( engineerAnswers ) => {
            // instantiate a new Engineer!
            const addedEngineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)

            // add the engineer to the Team Page
            teamStaff.push(addedEngineer);

            // go to action menu
            actionMenu();
        });
}

// Displays questions for adding Interns
const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What's the intern's employee ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What's the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What's the intern's school name?",
            name: "school"
        }
    ])
        .then(( internAnswers ) => {
            // instantiate a new Intern!
            const addedIntern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)

            // add the intern to the Team Page
            teamStaff.push(addedIntern);

            // go to action menu
            actionMenu();
        });
}

// Exit Application
function exitApp() {
    console.log(teamStaff);
    // create HTML
    const createHTML = generateHTML(teamStaff);

    fs.writeFile('./dist/index.html', createHTML, (err) =>
        err ? console.log(err) : console.log('Team page successfully created!')
    );
    
}

// Begins the app & gathers Manager's Info
const managerStart = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What's the team manager's employee ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What's the team manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What's the team manager's office number?",
            name: "officeNum"
        },
    ])
        .then(( managerAnswers ) => {
            // instantiate the manager!
            const addedManager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNum);

            // add the manager to the Team Page
            teamStaff.push(addedManager);

            // go to action menu
            actionMenu();
        });
}


managerStart();