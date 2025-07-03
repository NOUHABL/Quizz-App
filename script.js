const questions =[
    {
        question:"When is Noor's birthday?",
        answers: [
            { text: "21 JAN", correct: false},
            { text: "18 MAR", correct: true},
            { text: "08 MAY", correct: false},
            { text: "28 FEB", correct: false},
            ]
    },
    {
        question:"What's Noor's favorite color?",
        answers: [
            { text: "Green", correct: false},
            { text: "Yellow", correct: false},
            { text: "Blue", correct: true},
            { text: "Red", correct: false},
            ]

    },
    {
        question:"What is Nour's favorite animal?",
        answers: [
            { text: "pingouin", correct: true},
            { text: "Cats", correct: false},
            { text: "nounou", correct: false},
            { text: "dogs", correct: false},
            ]
    },
    {
        question:"what is nour's perfect plan for the weekend?",
        answers: [
            { text: "hanging out ", correct: false},
            { text: "baking", correct: false},
            { text: "shoping", correct: false},
            { text: "Stay at home playing genshin", correct: true},
            ]
    },
    {
        question:"What is nour's favourit thing to do in a boring class?",
        answers: [
            { text: "focus", correct: false},
            { text: "sleep", correct: false},
            { text: "imagen her life after 10 y", correct: false},
            { text: "day dreaming and crying her eyes out in the exam's night", correct: true},
            ]
    },
    {
        question:"What's Nour's favorite song?",
        answers: [
            { text: "west coast ldr", correct: false},
            { text: "appulese -lady gaga", correct: false},
            { text: "not yet ", correct: true},
            { text: "ray song-i dont remember any names", correct: false},
            ]
    },
    {
        question:"Is Nour a shy person with here friends?",
        answers: [
            { text: "NEVER!", correct: false},
            { text: "She is ", correct: false},
            { text: "Not that much", correct: false},
            { text: "hell no ", correct: true},
            ]
    },
    {
        question:"Where does Nour want to live?",
        answers: [
            { text: "tokyo-japan", correct: false},
            { text: "nyc-USA", correct: false},
            { text: "London-UK", correct: false},
            { text: "batna-Algeria", correct: true},
            ]
    },
    {
        question:"What is Nour's favorite season?",
        answers: [
            { text: "Winter", correct: false},
            { text: "Autumn", correct: true},
            { text: "Summer", correct: false},
            { text: "Spring", correct: false},
            ]
    },
    {
        question:"What's Nour's dream?",
        answers: [
            { text: "To be a succesful artist and writer", correct: true},
            { text: "To leave this world", correct: true},
            { text: "To be billionaire", correct: true},
            { text: "To live in peacful place and chill", correct: true},
            ]
    },
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    };
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>  {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        starQuiz();
    }
});

starQuiz();