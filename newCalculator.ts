#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { addition } from "./Operations/addition.js";        // Import Addition function from another addition file.
import { subtraction } from "./Operations/subtraction.js";
import { multiplication } from "./Operations/multiplication.js";
import { division } from "./Operations/division.js";
import { power } from "./Operations/power.js";
import { modulus } from "./Operations/modulus.js";
import { equal } from "./Operations/equal.js";
import { percentage } from "./Operations/percentage.js";



    console.log(`       LETS DO SOME CALCULATIONS
         _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`);


// console.log(newTitle.stop());


async function getanswer() {
let ask = await inquirer.prompt([
    {
        message: chalk.black.bgWhite("Type your 1st number :"),
        type: "number",
        name: "number1",
        validate: (ans) => {
            if (!ans ){
                return "Please enter a validate number";
            
            }
            return true
        } 


    },
    {
        message: chalk.black.bgWhite("Type your 2nd number :"),
        type: "number",
        name: "number2",
        validate: (ans) => {
            if (!ans){
                return "Please enter a validate number";
            
            }
            return true
        } 

    },
    {
        message: chalk.bgBlueBright("Which operation do you want to use?"),
        type: "list",
        choices: ["+ Addition", "- Subtract", "* Multiply", "/ Divide", "^ Power", "% Remainder", "= Equality", "% Percentage"],
        name: "Operator",


    }

]);

if 
(ask.Operator === "+ Addition") {
    let result = addition(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} + ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "- Subtract") {
    let result = subtraction(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} - ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "* Multiply") {
    let result = multiplication(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} * ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "/ Divide") {
    let result = division(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} / ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "^ Power") {
    let result = power(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} ^ ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "% Remainder") {
    let result = modulus(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} % ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "= Equality") {
    let result = equal(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} = ${ask.number2} = ${result}`)); 
}
else if 
(ask.Operator === "% Percentage") {
    let result = percentage(ask.number1, ask.number2);
    console.log(chalk.italic.bold.bgRedBright(`Your result is against ${ask.number1} % ${ask.number2} = ${result}`)); 
}};

async function startAgain() {
    do {
        await getanswer();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue ? Press y or n:"
        })
    }
    while(again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES")
}

startAgain();




