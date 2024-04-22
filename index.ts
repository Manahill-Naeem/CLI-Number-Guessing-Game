#! usr/bin/env/node
import inquirer from "inquirer";

console.log("Welcome to CodeWithManahill - CLI Number Guessing Game");

const randomNumber = Math.floor(Math.random( )* 3 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        meesage:"Enter your guess number(Number limit from 1 to 5):",
    }, 
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry! You guess a wrong number.");
}