const questions=[
    {
    questions:"Javascript is an _______ language",
    answers:[
        {text:"obect-oriented",correct:true},
        {text:"obect-Based",correct:false},
        {text:"procedural",correct:false},
        {text:"procedural",correct:false},
    ]
},
{
    questions:"Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
    answers:[
        {text:"const",correct:false},
        {text:"var",correct:false},
        {text:"let",correct:true},
        {text:"static",correct:false},
    ]
},
{
    questions:"Which data type in JavaScript is used to represent logical values?",
    answers:[
        {text:"String",correct:false},
        {text:"Boolean",correct:true},
        {text:"Number",correct:false},
        {text:"Undefined",correct:false},
    ]
},
{
    questions:"What does the undefined value in JavaScript represent?",
    answers:[
        {text:"An unassigned variable",correct:true},
        {text:"A null value",correct:false},
        {text:"procedural",correct:false},
        {text:"procedural",correct:false},
    ]
},
{
    questions:"What will be the output of the following code? console.log(typeof null)",
    answers:[
        {text:"'object'",correct:true},
        {text:"'null'",correct:false},
        {text:"'undefined'",correct:false},
        {text:"'number'",correct:false},
    ]
},
{
    questions:"Which operator is used to check both the value and the type of a variable in JavaScript?",
    answers:[
        {text:"==",correct:false},
        {text:"===",correct:true},
        {text:"!=",correct:false},
        {text:"!==",correct:false},
    ]
},
{
    questions:"Which statement is used to execute a block of code multiple times in JavaScript?",
    answers:[
        {text:"for",correct:true},
        {text:"if",correct:false},
        {text:"return",correct:false},
        {text:"break",correct:false},
    ]
},
{
    questions:"What does the if statement in JavaScript do?",
    answers:[
        {text:"Declares a variable",correct:false},
        {text:"Executes a block of code based on a condition",correct:true},
        {text:"Prints a message to the console",correct:false},
        {text:"Loops through a block of code",correct:false},
    ]
},
{
    questions:"Which of the following is not a loop structure in JavaScript?",
    answers:[
        {text:"while",correct:false},
        {text:"for",correct:false},
        {text:"if",correct:true},
        {text:"do-while",correct:false},
    ]
},
{
    questions:"In a switch statement, what keyword is used to terminate a case in JavaScript?",
    answers:[
        {text:"end",correct:false},
        {text:"break",correct:true},
        {text:"stop",correct:false},
        {text:"exit",correct:false},
    ]
}
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetstate()
    let CurrentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + "." + CurrentQuestion.
    questions;

     CurrentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
     });
}
function resetstate(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)

    }
}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
}
function showScore() {
    resetstate();
    questionElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();