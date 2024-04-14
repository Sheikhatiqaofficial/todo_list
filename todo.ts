#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todowork = [];
let statements = true;

console.log(chalk.blue.bold("\n \t HELLO THERE! WHICH TASKS ARE FOR TODAY? \n"));
while (statements) {
    let addtasks = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.gray.bold("ENTER YOUR TODAY'S NEW TASK:")
        }
    ]);
    todowork.push(addtasks.task);
    console.log(`${addtasks.task} YOUR TASK ADDED SUCCESFULLY!`);
    let moretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.gray.bold("DO YOU WANNA ADD MORE TASK?"),
            default: "False"
        }
    ]);
    statements = moretask.addmore
}
console.log(chalk.green("YOUR ALL TO-DO TASK FOR TODAY :", todowork));