var chalk = require('chalk');
var readlineSync=require('readline-sync');
var userName=readlineSync.question("What is you your name? ");
var score=0;

var welcomeMessage="welcome "+ userName + " Do you know Deepak? "
console.log(welcomeMessage);
console.log("----------------------------------------")
function play(question,answer){
  var userAnswer=readlineSync.question(chalk.yellowBright
(question));
  if(userAnswer===answer){
    console.log(chalk.green("Wow you are right"));
    score=score+1
  }else{
    console.log(chalk.red("sorry you are wrong!"));
    score=score-1
  }
  console.log("Your current score is: ",score)
console.log("----------------------------------------")
}

var questionGroup=[
  {
    question:"In which city does Deepak live? ",
    answer:"ujjain",
  },{
    question:"what is the favorite dish of Deepak? ",
    answer:"momos",
  },{
    question:"What is the hobby of Deepak? ",
    answer:"chess",
  },
]
for(var i=0;i<questionGroup.length;i++){
  var currentQuestion=(questionGroup[i])
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Nice you are really know Deepak")

console.log("Yay! Your Final scored: ",score);
