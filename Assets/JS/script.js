//VARIABLES (what variables do I need?)
const startButton = document.querySelector(".start");
const infoCard = document.querySelector(".info-card");
const quiz = document.querySelector(".quiz-card");
const noThanks = document.querySelector(".no-thanks");
const letsDoThis = document.querySelector(".lets-do-this")

function startQuiz(){
//remove display none from info card
infoCard.classList.remove("d-none");
}
//when start button is clicked, display info card
startButton.addEventListener("click",startQuiz);

function openQuiz(){
//when "lets do this" button is clicked, it will hide the info box and display the quiz box.
quiz.classList.remove("d-none");
infoCard.classList.add("d-none");
}
letsDoThis.addEventListener("click",openQuiz)

function returnStart(){
    //when "lets do this" button is clicked, it will hide the info box and display the quiz box.
    infoCard.classList.add("d-none");
}
noThanks.addEventListener("click",returnStart);
    

// const questions = [
//     {
//         question: 'What does HTML Mean?',
//         answers: ['answer1', 'answer2', 'answer3'],
//         correct: 'answer1',
//     },
//     {
//         question: 'What does HTML Mean?',
//         answers: ['answer1', 'answer2', 'answer3'],
//         correct: 'answer1',
//     },
//     {
//         question: 'What does HTML Mean?',
//         answers: ['answer1', 'answer2', 'answer3'],
//         correct: 'answer1',
//     },
// ]
// //Function

// function startQuiz(){
//     //unhide card element
//     quizBox.classList.remove("hide");
//     //use innertext to render questions and answers to user interface
// }


// //Eventlistener section

// startButton.addEventListener("click", startQuiz);

