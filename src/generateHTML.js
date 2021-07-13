
function generateHTML(teamStaff) {
    // create empty string to build html within
    let finalStr = "";
    // create HTML
    if (teamStaff.length > 0) {
        finalStr = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mini Project: Node!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/5aa1f9ec01.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-danger text-white">
        <h1>My Team</h1>
    </div>\n`
    };

    finalStr += `\n
      <div class = "col-7 mx-auto">\n
        <div class = "cardContainer">`

    // iterate through array to make HTML employee cards
    teamStaff.forEach(teamMember => {
        // if manager then display
        if (teamMember.employeeType == "Manager") {
            finalStr += `
            <div class="card" style="width: 18rem;">
                <div class="card-header column p-3 bg-primary text-white"> 
                    <h5>${teamMember.name}</h5>
                    <h5><i class="fa fa-mug-hot"></i> ${teamMember.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: <a href='mailto:${teamMember.email}'>${teamMember.email}</a> </li>
                        <li class="list-group-item">Office Number: ${teamMember.officeNum}</li>
                    </ul>
                </div>
            </div>`
        }
        // if engineer then display
        if (teamMember.employeeType == "Engineer") {
            finalStr += `
            <div class="card" style="width: 18rem;">
                <div class="card-header column p-3 bg-primary text-white"> 
                    <h5>${teamMember.name}</h5>
                    <h5><i class="fa fa-glasses"></i> ${teamMember.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: <a href='mailto:${teamMember.email}'>${teamMember.email}</a></li>
                        <li class="list-group-item">GitHub: <a href='https://github.com/${teamMember.gitHub}' target="_blank">@${teamMember.gitHub}</a></li>
                    </ul>
                </div>
            </div>`
        }
        // if intern then display
        if (teamMember.employeeType == "Intern") {
            finalStr += `
            <div class="card" style="width: 18rem;">
                <div class="card-header column p-3 bg-primary text-white"> 
                    <h5>${teamMember.name}</h5>
                    <h5><i class="fa fa-user-graduate"></i> ${teamMember.employeeType}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.id}</li>
                        <li class="list-group-item">Email: <a href='mailto:${teamMember.email}'>${teamMember.email}</a> </li>
                        <li class="list-group-item">School: ${teamMember.school}</li>
                    </ul>
                </div>
            </div>`
        }
    }
    );

    finalStr += `\n
        </div>
      </div>
    <script src="./lib/generateHTML.js"></script>
</body>
</html>`


    return finalStr;
}

module.exports = generateHTML;


