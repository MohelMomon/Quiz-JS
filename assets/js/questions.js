var timerSelect = document.querySelector('.timeleft');
var timer = document.querySelector('.timer');
var startGameButton = document.querySelector('.startbutton');
var questionContainer = document.querySelector('.questions-container');
var initialContainer = document.querySelector('.initial-container');
var askQuestion = document.querySelector('.askquestion');
var choices = document.querySelectorAll('.choices');
var answer1 = document.querySelector(".answer1");
  answer1.addEventListener('click', checkAnswer);
var answer2 = document.querySelector(".answer2");
  answer2.addEventListener('click', checkAnswer);
var answer3 = document.querySelector(".answer3");
  answer3.addEventListener('click', checkAnswer);
var answer4 = document.querySelector(".answer4");
  answer4.addEventListener('click', checkAnswer);
var questions;
var c = 0;
var quizStarted = false;
var secondsLeft = 75;
var currentScore = 0;
var highScores = [];
let questionPool = [ 
  {
    question: "How do you select all div elements on the page?",
    answers:["document.querySelector('div')", "document.querySelectorAll('div')", "document.getElementById('#div')", "document.appendChild('div')" ], 
    correctAnswer:1,
  },

  {
    question: "How do you write a message to the console with JavaScript?",
    answers:["console.log('Your Message')", "document.innerText('Your Message')", "alert('Your Message')", "document.write('Your Message')" ], 
    correctAnswer: 0,
  },

];
let currentQuestionIndex = 0;

function startGame() {
  initialContainer.setAttribute("style", "display:none;");
  timerSelect.setAttribute("style", "display:block");
  timer.setAttribute("style", "display:block")
  questionContainer.setAttribute("style", "display:block");
  setTime();
  loadQuizQuestions(questionPool[currentQuestionIndex]);
}

function loadQuizQuestions(question) {
 questionContainer.innerHTML = question.question;

}

function checkAnswer() {

}

function setTime () {
 var countDown = setInterval(function() {
  secondsLeft--;
  timerSelect.textContent = secondsLeft;

  if (secondsLeft === 0) {
    clearInterval(countDown);
  }
 }, 1000)
}


function endQuiz() {
}
