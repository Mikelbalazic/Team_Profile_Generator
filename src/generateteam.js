const generateteam = team => {

    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getRole()}</h5>
                <p>${manager.getName()}</p>
                <p>${manager.getId()}</p>
                <p>${manager.getEmail()}</p>
                <p>${manager.getOfficeNumber()}</p>
            </div>
        </div>
        `
    }

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.getRole()}</h5>
                <p>${engineer.getName()}</p>
                <p>${engineer.getId()}</p>
                <p>${engineer.getEmail()}</p>
                <p>${engineer.getGitHub()}</p>
            </div>
        </div>
        `
    }

    const generateIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getRole()}</h5>
                <p>${intern.getName()}</p>
                <p>${intern.getId()}</p>
                <p>${intern.getEmail()}</p>
                <p>${intern.getSchoolName()}</p>
            </div>
        </div>
        `
    }

    const finalTeam = [];

    finalTeam.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)))

    finalTeam.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(""))

    finalTeam.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)).join(""))

    return finalTeam.join("")

}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div class="float">
${generateteam(team)}
</div>
</body>
</html>`
}