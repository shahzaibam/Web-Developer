const start = document.querySelector(".start")
const quiz = document.querySelector(".quiz")
const question = document.querySelector(".question")
const qImg = document.querySelector(".qImg")
const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const counter = document.querySelector("#counter")
const timeGauge = document.querySelector("#timeGauge")
const progress = document.querySelector(".progress")
const score = document.querySelector(".score")


let questions = [
    {
        question : "When was Microsoft Founded ?",
        imgsrc : `<img src="/img/1595442845_918343_1595443241_noticia_normal.jpg">`,
        choiceA : "4th April 1975",
        choiceB : "11th June 1957",
        choiceC : "4th July 1985",
        correct : "A"
    }, 

    {
        question : "When bill gates became billionaire ?",
        imgsrc : `<img src="/img/descarga.jpg">`,
        choiceA : "In 1993",
        choiceB : "In 1987",
        choiceC : "In 2012",
        correct : "B"
    }, 

    {
        question : "When was the internet invented? In...",
        imgsrc : `<img src="/img/internet.jpg">`,
        choiceA : "1980s",
        choiceB : "1999s",
        choiceC : "1960s",
        correct : "C"
    }, 

]

const lastQuestion = questions.length - 1;
var runningQuestion = 0;

function renderQuestion(){
    let q = questions[runningQuestion]

    question.innerHTML = "<p>" + q.question + "</p>"
    qImg.innerHTML = q.imgsrc
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
}


function renderProgress(){
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div";
    }
}



let count = 0;
let questionTime = 10;
let gaugeWidth = 150;
let gaugeUnit = gaugeWidth / questionTime;
let TIMER;

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count
        timeGauge.style.width = count * gaugeUnit + "px"
        count ++
    }else{
        count = 0;
        answerIsWrong()
        if(runningQuestion<lastQuestion){
            runningQuestion++
            renderQuestion()
        }else{
            clearInterval(TIMER)
        }
    }
}


let SCORE = 0;

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        SCORE++
        answerIsCorrect()
    }else{
        answerIsWrong()
    }
    count = 0;
    if(runningQuestion<lastQuestion){
        runningQuestion++
        renderQuestion()
    }else{
        clearInterval(TIMER)
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0"
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00"
}


function startQuiz(){
    start.style.display = "none"
    renderQuestion()
    quiz.style.display = "block"
    renderProgress()
    renderCounter()
    TIMER = setInterval(renderCounter, 1000)
}   

start.addEventListener("click", startQuiz)








