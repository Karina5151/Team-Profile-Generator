// const Employee = require('./lib/Employee.js');
// const index = require('../index');

function generateHTML(teamStaff) {
    // create HTML
    if (generateHTML(teamStaff)) {
        return `<!DOCTYPE html>
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
    </div>
    <script src="./lib/generateHTML.js"></script>
    </body>
    </html>`
    };

    // iterate through array to make HTML employee cards
    teamStaff.forEach(teamStaff => {
        // if manager then display
        if (teamStaff.employeeType == "manager") {
            return `<div class="card" style="width: 18rem;">
                <div class="card-header column"> 
                    <h5>${managerAnswers.name}</h5>
                    <h5>${teamStaff.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${managerAnswers.id}</li>
                        <li class="list-group-item">Email: ${managerAnswers.email}</li>
                        <li class="list-group-item">Office Number: ${managerAnswers.officeNum}</li>
                    </ul>
                </div>`
        }
        // if engineer then display
        if (teamStaff.employeeType == "engineer") {
            return `<div class="card" style="width: 18rem;">
                <div class="card-header column"> 
                    <h5>${engineerAnswers.name}</h5>
                    <h5>${teamStaff.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineerAnswers.id}</li>
                        <li class="list-group-item">Email: ${engineerAnswers.email}</li>
                        <li class="list-group-item">GitHub Username: ${engineerAnswers.gitHub}</li>
                    </ul>
                </div>`
        }
        // if intern then display
        if (teamStaff.employeeType == "intern") {
            return `<div class="card" style="width: 18rem;">
                <div class="card-header column"> 
                    <h5>${internAnswers.name}</h5>
                    <h5>${teamStaff.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${internAnswers.id}</li>
                        <li class="list-group-item">Email: ${internAnswers.email}</li>
                        <li class="list-group-item">School: ${internAnswers.school}</li>
                    </ul>
                </div>`
        }
    }
    );
}

module.exports = generateHTML;





// // if manager then display
// if (teamStaff.employeeType == "manager") {
//     let liTag = document.createElement("li");
//     liTag.classList.add('list-group-item');
//     liTag.textContent = getOfficeNum();
// }
// // if engineer then display
// if (teamStaff.employeeType == "engineer") {
//     let liTag = document.createElement("li");
//     liTag.classList.add('list-group-item');
//     liTag.textContent = getgitHub();
// }
// // if intern then display
// if (teamStaff.employeeType == "intern") {
//     let liTag = document.createElement("li");
//     liTag.classList.add('list-group-item');
//     liTag.textContent = getschool();
// }


