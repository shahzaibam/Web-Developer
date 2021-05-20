const question = document.querySelector(".question")
const choices = document.querySelector(".choices")
const choice1 = document.querySelector(".choice1")
const choiceA = document.querySelector("#choiceA")
const choice2 = document.querySelector(".choice2")
const choiceB = document.querySelector("#choiceB")
const choice3 = document.querySelector(".choice3")
const choiceC = document.querySelector("#choiceC")
 

const question2 = document.querySelector(".question2")
const choiceA2 = document.querySelector("#choiceA2")
const choiceB2 = document.querySelector("#choiceB2")
const choiceC2 = document.querySelector("#choiceC2")



let questions = [
    {
        question1 : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
        choiceA1 : "Leyes de autonomía",
        choiceB1 : "Estatuos de autonomía",
        choiceC1 : "Reglaementos de autonomia",
        correct1 : "A",
    },

    {
        question2 : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
        choiceA2 : "Leyes de autonomía",
        choiceB2 : "Estatuos de autonomía",
        choiceC2 : "Reglaementos de autonomia",
        correct2 : "A",
    },


    {
        question3 : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
        choiceA3 : "Leyes de autonomía",
        choiceB3 : "Estatuos de autonomía",
        choiceC3 : "Reglaementos de autonomia",
        correct3 : "A",
    }
]

const CHECK = 1;

const lastQuestion = questions.length -1;
var runningQuestion = 0;


function renderQuestion1(){
    let q = questions[runningQuestion]

    question.innerHTML =  q.question1 
    choiceA.innerHTML = "<p>" + q.choiceA1 + "</p>"
    choiceB.innerHTML = "<p>" + q.choiceB1 + "</p>"
    choiceC.innerHTML = "<p>" + q.choiceC1 + "</p>"
}


function renderQuestion2(){
    let q = questions[runningQuestion]

    question2.innerHTML =  q.question2 
    choiceA2.innerHTML = "<p>" + q.choiceA2 + "</p>"
    choiceB2.innerHTML = "<p>" + q.choiceB2 + "</p>"
    choiceC2.innerHTML = "<p>" + q.choiceC2 + "</p>"
}

renderQuestion1()
renderQuestion2()
