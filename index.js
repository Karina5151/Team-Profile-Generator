const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager.js');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');

let teamPage = new Employee("Team work makes the dream work");

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
        }
    ])
        .then(({ name, id, email, gitHub }) => {
            // instantiate a new Engineer!
            const addedEngineer = new Engineer(name, id, email, gitHub)

            // add the engineer to the Team Page
            teamPage.push(addedEngineer);

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
            name: "gitHub"
        }
    ])
        .then(({ name, id, email, school }) => {
            // instantiate a new Intern!
            const addedIntern = new Intern(name, id, email, school)

            // add the intern to the Team Page
            teamPage.push(addedIntern);

            // go to action menu
            actionMenu();
        });
}

// Exit Application
function exitApp() {
    // create HTML
    const createHTML = generateHTML(teamPage);

    fs.writeFile('index.html', createHTML, (err) =>
        err ? console.log(err) : console.log('You have successfully created an HTML!')
    );
    const generateHTML = (teamPage) =>

`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Mini Project: Node!</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="p-3 mb-2 bg-danger text-white">My Team</h1>
        </div>
    </div>

    <div class="card" style="width: 18rem;">
        <div class="card-header column"> 
            <h5>${teamPage.Employee.name}</h5>
            <h5>${teamPage.Employee.employeeType}</h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${teamPage.Employee.id}</li>
                <li class="list-group-item">Email: ${teamPage.Employee.email}</li>
                <li class="list-group-item">XXX</li>
            </ul>
        </div>

    </div>

</body>
</html>`

    // close terminal
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
        .then(({ name, id, email, officeNum }) => {
            // instantiate the manager!
            const addedManager = new Manager(name, id, email, officeNum)

            // add the manager to the Team Page
            teamPage.push(addedManager);

            // go to action menu
            actionMenu();
        });
}


managerStart();