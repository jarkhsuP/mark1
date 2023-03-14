var readLineSync = require("readline-sync");

var score = 0;
var userName;

  var userName = readLineSync.question("Enter your name: ");
console.log("Hello " + userName + ", let's see how well you know me.");

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log("Well done " + userName + ". You scored a point for that.")  
  }
  else {
    console.log("That's incorrect " + userName + ". The correct answer is " + answer);
  }
  console.log("Your current score is " + score);
  console.log("x------------------------x");
}
var questions = [{
  question: "Q. What year was I born in? ",
  answer: "1999"
},
{
  question:"Q. What city am I currently in? ",
  answer: "Nanded"  
},
{
  question:"Q. What book am I currently reading? ",
  answer: "The Picture of Dorian Gray"
},
{
  question: "Q. What non-programming language am I interested in learning? ",
  answer: "Japanese"
},
{
  question: "Q. What mobile device am I currently using? ",
  answer: "Redmi Note 4"
}]
for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("Your final score is " + score + ".");
var highscores = [
  {
    name: "Shobhna",
    score: 5
  },
  {                
    name: "Pushkraj",
    score: 4
  }
]
for(let i = 0; i < highscores.length; i++) {
    var out = highscores[i]
  console.log("Highscores are", out);
};
