// Declare consts
const inquirer = require("inquirer");
const fs = require("fs");

// Declare workers
const manager = require("./members/manager");
const engineer = require("./members/engineer");
const employee = require("./members/employee");
const intern = require("./members/intern");
const { ENAMETOOLONG } = require("constants");

// Empty array 
const employees = [];

// Starts the application
function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "What is your team member's name?",
        name: "name"
    },

    {
        type: "",
        message:
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ],
        name: "role"
    },
    {
        message: "Please enter your member's ID",
        name: "id"
    },
    {
        message: "Please enter your member's email address.",
        name: "email"
    }])

    .then(function({name, role, id, email}) {
        let roleInfo = "";
            if (role === "Engineer") [
                roleInfo = "Github username?";
            } else if (role === "Intern") {
                roleInfo = "School name?";
            } else {
                roleInfo = "Office number?";
            }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },

        {
            type: "list",
            message: "Add another team member?",
            choices: [
                "Yes",
                "No"
            ],
            name: "otherMembers"
        }])
        .then