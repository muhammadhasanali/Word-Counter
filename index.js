import inquirer from 'inquirer';
let answer = await inquirer.prompt({
    name: "sentence",
    message: "Enter your sentence to count the word",
    type: "input"
});
let wordcount = answer.sentence.trim().split(" ");
console.log(`Your sentence word count is ${wordcount.length}`);
console.log(wordcount);
