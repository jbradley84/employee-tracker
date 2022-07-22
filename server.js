const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// connect to database
const db = mysql.createConnection({
   host: "localhost",
   port: 3001,
   user: "root",
   password: "9)goR9K%))*B9$6PVqDz",
   database: "human_resources"
});

