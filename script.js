// const question = document.querySelector(".question")
// const choices = document.querySelector(".choices")
// const choice1 = document.querySelector(".choice1")
// const choiceA = document.querySelector("#choiceA")
// const choice2 = document.querySelector(".choice2")
// const choiceB = document.querySelector("#choiceB")
// const choice3 = document.querySelector(".choice3")
// const choiceC = document.querySelector("#choiceC")

 

// const question2 = document.querySelector(".question2")
// const choiceA2 = document.querySelector("#choiceA2")
// const choiceB2 = document.querySelector("#choiceB2")
// const choiceC2 = document.querySelector("#choiceC2")



// let questions = [
//     {
//         question1 : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
//         choiceA1 : "Leyes de autonomía",
//         choiceB1 : "Estatuos de autonomía",
//         choiceC1 : "Reglaementos de autonomia",
//         correct1 : "A",
//     },

//     {
//         question : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
//         choiceA : "Leyes de autonomía",
//         choiceB : "Estatuos de autonomía",
//         choiceC : "Reglaementos de autonomia",
//         correct : "A",
//     },


//     {
//         question : "Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
//         choiceA : "Leyes de autonomía",
//         choiceB : "Estatuos de autonomía",
//         choiceC : "Reglaementos de autonomia",
//         correct : "A",
//     }
// ]

// const CHECK = 1;

// const lastQuestion = questions.length -1;
// var runningQuestion = 0;


// // function renderQuestion1(){
// //     let q = questions[runningQuestion]

// //     question.innerHTML =  q.question1 
// //     choiceA.innerHTML = "<p>" + q.choiceA1 + "</p>"
// //     choiceB.innerHTML = "<p>" + q.choiceB1 + "</p>"
// //     choiceC.innerHTML = "<p>" + q.choiceC1 + "</p>"
// //     runningQuestion++;
// // }




// renderQuestion1()

// const enviar = document.getElementsByClassName("bt")

function run(){
    var total = 4;
    var puntos = 0;
    
    var formulario = document.getElementsByName("quizForm")
    
    for(var i; i<=4; i++){
        if(formulario["p" + i].value === "a"){
            console.log(true)
            puntos
        }
    }
}

function enviar(){
    console.log("jello")
}

