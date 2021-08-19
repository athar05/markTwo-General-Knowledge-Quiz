var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May I Know Your Name?");

console.log(`Hello ${userName}, Welcome to this quiz, where we will be testing your general knowledge.`);
console.log ("----===----");

var instructions = readlineSync.question("Before you begin, enter [1] to read instrcutions, enter [0] to skip");

console.log ("----===----");

if (instructions === "1") {
  console.log ("1.For every right answer, you get 1 point, and for every wrong answer, you lose 1 point.") 
} else {
  console.log ("The quiz will begin now. All the best")
}
console.log ("----===----");
var userInput1 = readlineSync.question("Enter 1 to begin the quiz")

if (userInput1 === "1") {
  console.log ("The quiz starts in 3..2..1..") 
} else {
  var userInput1 = readlineSync.question("Press 1 to begin the quiz")
}
console.log ("----===----");

function play (question, answer) {
  var userAnswer = readlineSync.question(question);

if (userAnswer.toLocaleUpperCase() === answer.toLocaleUpperCase()) {
  console.log("You are right. You get 1 point")
  score++;
} else { 
  console.log (`Uh-oh... that is the wrong answer. The right answer is ${answer}.You lose 1 point`);
  score--;
}
console.log(`Your score is ${score}`);
console.log ("----===----");

}

var questions = [{
  question: "Grand Central Terminal, Park Avenue, New York is the world's:\n[a]	largest railway station\n[b]	highest railway station\n [c]	longest railway station\n [d]	NOTA",
  answer: "A"
},
{
question: "Entomology is the science that studies\n [a]	Human behavior\n [b]	Insects\n [c]	Technical and scientific terms\n [d]	Rocks",
answer: "B"},

{
  question: " For which of the following disciplines is Nobel Prize awarded?\n[a]	Physics and Chemistry \n[b]	Physiology or Medicine\n [c]	Literature, Peace and Economics \n[d]	All",
  answer: "D"
},

{
  question: "Hitler party, which came into power in 1933, is known as\n [a]	Labour Party \n[b]	Nazi Party\n [c]	Ku-Klux-Klan \n[d]	Democratic Party",
  answer: "B"
},

{
  question: "Galileo was an Italian astronomer who: \n[a]	developed the telescope \n[b]	discovered four satellites of Jupiter \n[c]	discovered that the movement of pendulum produces a regular time measurement\n [d]	All",
  answer: "D"
},

];

for (var i=0; i<questions.length; i++) {
  var currentQuestion= questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log ("----===----");

console.log (`The quiz has come to an end. Your final score is ${score}`);

console.log ("----===----");

console.log (`Thank you for participating, ${userName}`);


