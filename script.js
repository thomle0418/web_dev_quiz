const start_btn= document.getElementById('start-btn');
const rules_card= document.getElementById('rules-card');
const quit_btn= document.getElementById('quit-button');
const continue_btn=document.getElementById('continue-button');
const quiz_card= document.getElementById('quiz-card');

start_btn.addEventListener('click', displayRules);
quit_btn.addEventListener('click', quitQuiz);
continue_btn.addEventListener('click', startQuiz);


// Display rules when start button is clicked
function displayRules(){
    rules_card.classList.remove('d-none');
    start_btn.classList.add('d-none');
}

//Return to start button if 'quit quiz' is _handleClickEventOnHand
function quitQuiz(){
    rules_card.classList.add('d-none');
    start_btn.classList.remove('d-none');
}

function startQuiz(){
    rules_card.classList.add('d-none');
    quiz_card.classList.remove('d-none');

}



//Get questions for quiz
getQuestions=()=>{  


};

//Selecting the correct answer
selectAnswer=()=>{


}

//Starting timer
startTimer=()=>{


}

//Questions for quiz_card

let questions = [
{
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
    ]
},
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
    ]
},
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor"
    ]
},
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
    ]
},
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
    ]
}
];