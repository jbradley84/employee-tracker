const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


// connect to database
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "9)goR9K%))*B9$6PVqDz",
   database: "human_resources",
},
   console.log('Connected to HR database.')
);

db.connect(function (err) {
   if (err) throw err;
   hr_menu();
});

// HUMAN RESOURCES MENU PROMPT
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
      .then(function (response) {
         // switch statement to trigger functions based on HR menu selection
         switch (response.select) {
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

// VIEW ALL EMPLOYEES
function allEmployees() {
   console.log('VIEW ALL EMPLOYEES');
   const query = "SELECT * FROM employee";
   db.query(query, function (err, res) {
      if (err) throw err;
      console.table("All Employees:", res);
      hr_menu();
   });
}

// ADD EMPLOYEE
function addEmployee() {
   console.log('ADD AN EMPLOYEE');
}

// UPDATE EMPLOYEE ROLE
function updateRole() {
   console.log('UPDATE AN EMPLOYEE ROLE');
}

// VIEW ALL ROLES
function allRoles() {
   console.log('VIEW ALL ROLES');
   const query = "SELECT * FROM role";
   db.query(query, function (err, res) {
      if (err) throw err;
      console.table("All Roles:", res);
      hr_menu();
   });
}

// ADD ROLE
function addRole() {
   console.log('ADD A ROLE');
}

// VIEW ALL DEPARTMENTS
function allDepartments() {
   console.log('VIEW ALL DEPARTMENTS');
   const query = "SELECT * FROM department";
   db.query(query, function (err, res) {
      if (err) throw err;
      console.table("All Departments:", res);
      hr_menu();
   });
}

// ADD DEPARTMENT
function addDepartment() {
   console.log('ADD A DEPARTMENT');
}

// QUIT
function hrQuit() {
   console.log('GOODBYE');
}