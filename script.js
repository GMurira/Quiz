//Dom elemnts
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerConatiner = document.getElementById("answer-container");
const currentQuestion = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const scoreText = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const scoreSpan = document.getElementById("score");


const questions = [
    {
        question: "What is the capital of France?", 
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false}
        ],
    },
    {
        question: "Which planet is known as the Red Planet?", 
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false}
        ],
    },
    {
        question: "What is the largest ocean on Earth?", 
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ],
    },
    {
        question: "Who wrote 'Romeo and Juliet'?", 
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false}
        ],
    },
    {
        question: "What is the chemical symbol for water?", 
        answers: [
            {text: "O2", correct: false},
            {text: "H2O", correct: true},
            {text: "CO2", correct: false},
            {text: "NaCl", correct: false}
        ],
    },
     {
        question: "Which country is known as the Land of the Rising Sun?", 
        answers: [
            {text: "China", correct: false},
            {text: "Japan", correct: true},
            {text: "South Korea", correct: false},
            {text: "Thailand", correct: false}
        ],
    },
    {
        question: "what is the chemical symbol for gold?", 
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Fe", correct: false},
            {text: "Pb", correct: false}
        ],
    }
];


//Quiz state
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;


totalQuestionSpan.textContent = questions.length;
//maxScoreSpan.textContent= questions.length;


//Event listeners
startBtn.addEventListener("click", startQuiz);
function startQuiz(){
    //reset state
    currentQuestionIndex = 0;
    scoreSpan.textContent = 0;
   // answerDisabled = false;

    //update UI
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion(){
    //Reset state
    answerDisabled = false;
    const currentQuestionData = questions[currentQuestionIndex];
    currentQuestion.textContent = currentQuestionIndex + 1;
}
restartBtn.addEventListener("click", restartQuiz);

function restartQuiz(){
    console.log("Quiz restarted")
}

