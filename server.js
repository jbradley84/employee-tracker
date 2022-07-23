const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const { allowedNodeEnvironmentFlags } = require('process');

// connect to database
const db = mysql.createConnection({
   host: "localhost",
   //port: 3001,
   user: "root",
   password: "9)goR9K%))*B9$6PVqDz",
   database: "human_resources",
});

db.connect(function (err) {
   if (err) throw err;
   hr_menu();
});

function hr_menu() {
   inquirer.prompt({
      name: "select",
      type: "list",
      message: "What would you like to do?",
      choices: [
         "View All Employees",
         "Add Employee",
         "Update Employee Role",
         "View All Roles",
         "Add Role",
         "View All Departments",
         "Add Department",
         "QUIT"
      ],
   })
   .then(function (choices) {
      switch (choices.action) {
         case "View All Employees":
            allEmployees();
            break;
         case "Add Employee":
            addEmployee();
            break;
         case "Update Employee Role":
            updateRole();
            break;
         case "View All Roles":
            allRoles();
            break;
         case "Add Role":
            addRole();
            break;
         case "View All Departments":
            allDepartments();
            break;
         case "Add Department":
            addDepartment();
            break;
         case "QUIT":
            hrQuit();
            break;
         default:
            break;
      }
   });
}