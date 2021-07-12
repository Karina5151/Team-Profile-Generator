const fs = require("fs");

const generateHTML = (teamStaff) => {
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
    
    <script src="./lib/generateHTML.js"></script>
    </body>
    </html>`

    teamStaff.forEach(teamStaff => {
        `<div class="card" style="width: 18rem;">
       <div class="card-header column"> 
           <h5>${teamStaff.Employee.getName()}</h5>
           <h5>${teamStaff.Employee.getEmployeeType()}</h5>
       </div>
       <div class="card-body">
           <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${teamStaff.Employee.getId()}</li>
               <li class="list-group-item">Email: ${teamStaff.Employee.getEmail()}</li>
               <li class="list-group-item">XXX</li>
           </ul>
       </div>

   </div>`

        // if manager then display
        if (teamStaff.employeeType == "manager") {
            let liTag = document.createElement("li");
            liTag.classList.add('list-group-item');
            liTag.textContent = getOfficeNum();
        }
        // if engineer then display
        if (teamStaff.employeeType == "engineer") {
            let liTag = document.createElement("li");
            liTag.classList.add('list-group-item');
            liTag.textContent = getgitHub();
        }
        // if intern then display
        if (teamStaff.employeeType == "intern") {
            let liTag = document.createElement("li");
            liTag.classList.add('list-group-item');
            liTag.textContent = getschool();
        }
    });

}



