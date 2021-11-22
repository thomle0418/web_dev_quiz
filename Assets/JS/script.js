//VARIABLES (what variables do I need?)
const startButton = document.querySelector(".start");
const infoCard = document.querySelector(".info-card")

function startQuiz(){
infoCard.classList.remove("d-none");
}

startButton.addEventListener("click",startQuiz);

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

