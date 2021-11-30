//VARIABLES (what variables do I need?)
const startButton = document.querySelector(".start");
const infoCard = document.querySelector(".info-card");
const quiz = document.querySelector(".quiz-card");
const noThanks = document.querySelector(".no-thanks");
const letsDoThis = document.querySelector(".lets-do-this")

//Skateboarding questions 
//End of skateboarding questions 

//Start of  button functions
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

//End of button functions



//Timer count down function

//End of timer count down functions

//skateboarding questions

let questions = [
    {
        number: 1,
        question: "Where was skateboarding invented?",
        answer: "The United States",
        options: [
            "The United States",
            "Germany", 
            "The United Kingdom",
            "Japan",
        ]
    },
    {
        number: 2,
        question: "Who is regarded as the father of modern skateboarding?",
        answer: "Rodney Mullen",
        options: [
            "Tony Hawk",
            "Tony Alva", 
            "Bam Margera ",
            "Rodney Mullen",
        ]
    },
    {
        number: 3,
        question: "Who had the ender part in Enjoi's, 'Bag of Suck', video?",
        answer: "Jerry Hsu",
        options: [
            "Louie Barletta",
            "Jerry Hsu", 
            "Jose Rojo",
            "Caswell Berry",
        ]
    },
    {
        number: 4,
        question: "Who won the 2021 Skateboarding Olympic gold medal?",
        answer: "Yuto Horigome",
        options: [
            "Aurelien Giraud",
            "Nyjah Huston", 
            "Yuto Horigome",
            "Kelvin Hoefler",
        ]
    },
    {
        number: 5,
        question: "Who won Skater of the year in 2020?",
        answer: "Mason Silva",
        options: [
            "Mason Silva",
            "Tom Knox", 
            "Taylor Kirby",
            "Alexis Sablone",
        ]
    },
];

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

