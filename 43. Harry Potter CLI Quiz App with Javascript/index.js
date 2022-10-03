var readlineSync = require("readline-sync");
var chalk = require("chalk");

let userScore = -0;
var highScore = 50;

var userName = readlineSync.question("Enter your name: ");
console.log(
    "Welcome " + userName + " to the " + chalk.bgGreenBright("POTTER QUIZ!\n")
);
console.log(
    "This is a quiz designed to check whether you are a real " +
        chalk.bgRed("Potter head") +
        " or not\n"
);
console.log(
    "Enter the option you think is the answer to the question.\n\nYou get " +
        chalk.bgGreenBright("+10 points") +
        " for correct answer and " +
        chalk.bgRed("-5 points") +
        " for wrong answer.\n"
);

var questionList = [
    {
        question:
            chalk.bgCyanBright(
                "Harry and Voldemort both were descendants of whom?"
            ) + "\na) Perkins\nb) Peverells\nc) Barns\nd) Riddles\n",
        answer: "b"
    },
    {
        question:
            chalk.bgCyanBright(
                "The famous Gellert Grindlewald went to which school?"
            ) +
            "\na) Hogwarts\nb) Beauxbatons\nc) Durmstrang\nd) None of the above\n",
        answer: "c"
    },
    {
        question:
            chalk.bgCyanBright("'I open at the close' - What is it ?") +
            "\na) It is one of the password to enter the griffindor common room.\nb) It was written on the mirror of erised.\nc) It was written on the snitch\nd) It was the password to enter Dumbledore's office \n",
        answer: "c"
    },
    {
        question:
            chalk.bgCyanBright(
                "The Slytherin common room is located in the ?😉"
            ) +
            "\na) Dungeons\nb) The North Tower\nc) The third floor\nd) Nobody knows\n",
        answer: "a"
    },
    {
        question:
            chalk.bgCyanBright(
                "Status of which creature guarded Dumbledore's office?"
            ) +
            "\na) Phoenix\nb) Threstal\nc) Dragon\nd) Griffin (A magical beast)\n",
        answer: "d"
    }
];

function quiz(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toLocaleLowerCase() === answer) {
        console.log("Your answer is " + chalk.greenBright("Correct.✅\n"));
        userScore += 10;
    } else {
        console.log("Your answer is " + chalk.redBright("Wrong.❌\n"));
        userScore = userScore - 5;
    }
    console.log(
        chalk.bgYellowBright("Your current score is " + chalk.green(userScore))
    );
    console.log("------------------------------------\n");
}

for (var i = 0; i < questionList.length; i++) {
    var currentQues = questionList[i];
    quiz(currentQues.question, currentQues.answer);
}

console.log("Your total score is " + userScore + ".\n");

if (userScore >= highScore) {
    highScore = userScore;
    console.log("Congratulations! You have the highest score of all.\n");
} else {
    console.log("Read the books and attempt again to beat the highscore.\n");
}

console.log("The current leaderboard is: ");
var leaderboard = ["Harsh: 50", "Sahil: 40", "Naman: 35"];

for (var i = 0; i < leaderboard.length; i++) {
    console.log(leaderboard[i]);
}
