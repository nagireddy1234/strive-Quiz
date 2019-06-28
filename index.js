// // Creating questionss and answers

// window.onload = function () {

//   var questions = [{
//       question: "What does CPU stand for?",
//       answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit", "Central Processing Unit"],
//       correct: 3
//     },

//     {
//       question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
//       answers: ["Static", "Private", "Final", "Public"],
//       correct: 2
//     },

//     {
//       question: "The logo for Snapchat is a Bell.",
//       answers: ["True", "False"],
//       correct: 1
//     },

//     {
//       question: "Pointers were not used in the original C programming language; they were added later on in C++.",
//       answers: ["True", "False"],
//       correct: 1
//     },

//     {
//       question: "What is the most preferred image format used for logos in the Wikimedia database?",
//       answers: [".svg", ".png", ".jpeg", ".gif"],
//       correct: 0
//     },

//     {
//       question: "In web design, what does CSS stand for?",
//       answers: ["Corrective Style Sheet", "Computer Style Sheet", "Cascading Style Sheet", "Counter Strike: Source"],
//       correct: 2
//     },

//     {
//       question: "What is the code name for the mobile operating system Android 7.0?",
//       answers: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
//       correct: 0
//     },

//     {
//       question: "On Twitter, what is the character limit for a Tweet?",
//       answers: ["120", "140", "160", "100"],
//       correct: 1
//     },

//     {
//       question: "Linux was first created as an alternative to Windows XP.",
//       answers: ["True", "False"],
//       correct: 1
//     },

//     {
//       question: "Which programming language shares its name with an island in Indonesia?",
//       answers: ["Python", "C", "Jakarta", "Java"],
//       correct: 3
//     }
//   ]
//   var questionCounter = 0; //Tracks question number
//   var selections = []; //Array containing user choices
//   var quiz = document.getElementById('#quiz'); 

//   // Display initial question
//   displayNext();
// }



function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
  new Question( "What does CPU stand for?", ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit", "Central Processing Unit"], "Central Processing Unit"),
  new Question("In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?", ["Static", "Private", "Final", "Public"], "Final"),
  new Question( "The logo for Snapchat is a Bell.", ["True", "False"], "False"),
  new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
  new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();



