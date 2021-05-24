//const question = document.querySelector(".question")
//const choice1 = document.querySelector(".choice1")
//const choiceA = document.querySelector("#choiceA")
//const choice2 = document.querySelector(".choice2")
//const choiceB = document.querySelector("#choiceB")
//const choice3 = document.querySelector(".choice3")
//const choiceC = document.querySelector("#choiceC")
const icon = document.querySelector(".iconDiv")
const input = document.querySelector(".input")
let questions = [
    {
        question : " Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : " Las ades y ciudades ainan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "B",
    },


    {
        question : " as  autónomas de España .........",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "C",
    },

    {
        question : " Lidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las leyes orgán",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las ssss de las comunidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las leyes orsijsijss comunidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC :"Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las leyes orgánicas jsjssjis de las comunidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las leyes oskssomunidades y ciudades autónomas de España se denominan...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },

    {
        question : "Las leyes orgánicas osososos...",
        choiceA : "Leyes de autonomía",
        choiceB : "Estatuos de autonomía",
        choiceC : "Reglaementos de autonomia",
        correct : "A",
    },


]

const uncheck = "fa-circle"
const check = "fa-check-circle"


num=0;
for(var i= 0; i<=10; i++){
    let q = questions[i]     
    
    const DONE = true ? check : uncheck

    const div = document.createElement("div")    
     num++
    div.innerHTML = num+" "+ q.question +
    `<ul>\
        <div>\
            <div>\
                <input class="input" type="radio" name="test1 1" value="A"> ${q.choiceA} <br>
                <input class="input" type="radio" name="test2 2" value="B"> ${q.choiceB} <br>
                <input class="input" type="radio" name="test3 3" value="C"> ${q.choiceC} \
            </div>
        </div>
    </ul>`

    document.getElementsByTagName('body')[0].appendChild(div) 

    let SCORE = 0;

    const answer = input

    console.log(answer)

    const TRY = answer == questions[i].correct ? true : false;

    console.log(TRY)

    function checkAnswer(answer){
        if(answer == questions[i].correct){
            console.log(true)
            
            SCORE++
    
    
        }else{
            
    
        }
    
    }

    checkAnswer(answer)

    // const pchoiceA = document.createElement("p") 
    // document.write("<i class='far fa-circle'></i>")
    // document.write(q.choiceA)
    // document.getElementsByTagName('body')[0].appendChild(pchoiceA)

    
    // const pchoiceB = document.createElement("li") 
    // document.write("<i class='far fa-circle'></i>")
    // document.write(q.choiceB)
    // document.getElementsByTagName('body')[0].appendChild(pchoiceB)

    // const pchoiceC = document.createElement("li") 
    // document.write("<i class='far fa-circle'></i>")
    // document.write(q.choiceC)
    // document.write("<br>")
    // document.write("<br>")
    // document.write("<br>")
    // document.getElementsByTagName('body')[0].appendChild(pchoiceC)


    // const pchoiceB= document.createElement("p")
    // pchoiceB.innerHTML = q.choiceB
    // document.getElementsByTagName('body')[0].appendChild(pchoiceB)
    // document.getElementsByTagName('body')[0].appendChild(br) 


    // const pchoiceC= document.createElement("p")
    // pchoiceC.innerHTML = q.choiceC
    // document.getElementsByTagName('body')[0].appendChild(pchoiceC)
    // document.getElementsByTagName('body')[0].appendChild(br) 


    // // const p = document.createElement("p") 
    // // p.innerHTML = q.question 
    // // const pchoiceB = document.createElement("p")
    // // pchoiceB.innerHTML = q.choiceB

    // // const pchoiceC = document.createElement("p")
    // // pchoiceC.innerHTML = q.choiceC

        
    console.log(q)

}


// const runningQuestion = 0

// function renderQuestion1(){
//     let q = questions[runningQuestion]

//     question.innerHTML =  q.question
//     choiceA.innerHTML = "<p>" + q.choiceA + "</p>"
//     choiceB.innerHTML = "<p>" + q.choiceB + "</p>"
//     choiceC.innerHTML = "<p>" + q.choiceC + "</p>"
// }


// function renderQuestion2(){
//     let q = questions[runningQuestion + 1]

//     question2.innerHTML =  q.question2
//     choiceA2.innerHTML = "<p>" + q.choiceA2 + "</p>"
//     choiceB2.innerHTML = "<p>" + q.choiceB2 + "</p>"
//     choiceC2.innerHTML = "<p>" + q.choiceC2 + "</p>"
// }




// renderQuestion1()
// renderQuestion2()


