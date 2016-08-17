console.log("security_questions.js loaded");

var securityQuestions = [
	{
		question: "What was your first pet's name?",
		expectedAnswer: "FlufferNutter"
	},
	{
		question: "What was the model year of your first car?",
		expectedAnswer: "1985"
	},
	{
		question: "What city were you born in?",
		expectedAnswer: "NYC"
	}
]

var userAnswer = "";
var hacker = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect security question response!");
    hacker = true;
		break;
	}
}

if (hacker){
  console.log("Stop!");
}
