const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const generateTeam = require("./src/generateteam");
const fs = require("fs");
const path = require("path");

const DIR = path.resolve(__dirname, "dist");
const pathName = path.join(DIR, "team.html")

const employees = [];

function initApp() {
    mainMenu();
}

function mainMenu() {
    inquirer.prompt(
        {
            type: "list",
            message: "Select your team member's role.",
            choices: [
                "Intern",
                "Engineer",
                "Manager",
                "I dont want to add anymore members"
            ],
            name: "role"
        }
    )
        .then((data) => {
            let memberType = data.role


            switch (memberType) {
                case "Intern":
                    getIntern()
                    break;
                case "Engineer":
                    getEngineer()
                    break;
                case "Manager":
                    getManager()
                    break;
                default:
                buildTeam()
            }
        })

    function getIntern() {
        inquirer.prompt([
            {
                message: "Enter your team member's name.",
                name: "name"
            },
            {
                message: "Enter your team member's ID.",
                name: "id"
            },
            {
                message: "Enter your team member's email address.",
                name: "email"
            },
            {
                name: "school",
                type: "input",
                message: "What is the Intern's school?"
            }
        ])
            .then((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.school)
                employees.push(intern);

                console.log(employees)
                mainMenu()
            })
    }

    function getEngineer() {
        inquirer.prompt([
            {
                message: "Enter your team member's name.",
                name: "name"
            },
            {
                message: "Enter your team member's ID.",
                name: "id"
            },
            {
                message: "Enter your team member's email address.",
                name: "email"
            },
            {
                name: "github",
                type: "input",
                message: "What is the engineer's github username?"
            }
        ])
            .then((data) => {
                const engineer = new Engineer(data.name, data.id, data.email, data.github)
                employees.push(engineer);

                console.log(employees)
                mainMenu()
            })

    }

    function getManager() {
        inquirer.prompt([
            {
                message: "Enter your team member's name.",
                name: "name"
            },
            {
                message: "Enter your team member's ID.",
                name: "id"
            },
            {
                message: "Enter your team member's email address.",
                name: "email"
            },
            {
                name: "officeNumber",
                type: "input",
                message: "What is the manager's office number?"
            }
        ])
            .then((data) => {
                const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
                employees.push(manager);

                console.log(employees)
                mainMenu()
            })
    }

    function buildTeam(){
        console.log("build team was called")
        if(!fs.existsSync(DIR)){
            fs.mkdirSync(DIR)
        }
        fs.writeFileSync(pathName, generateTeam(employees), "utf-8")
    }

}
initApp();