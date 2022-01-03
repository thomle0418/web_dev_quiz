const start_btn= document.getElementById('start-btn');
const rules_card= document.getElementById('rules-card');

start_btn.addEventListener('click', startQuiz);

// Start Quiz function
function startQuiz(){
    rules_card.classList.remove('d-none');
    start_btn.classList.add('d-none');
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
