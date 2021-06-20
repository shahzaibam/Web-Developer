const next = document.querySelector(".arrow-next")
const prev = document.querySelector(".arrow-prev")
let slider_index = 0;


function showSlide(index){
    let slide = document.querySelectorAll(".slide")
    let dots = document.querySelectorAll(".nav-dot")



    if(index>=slide.length){
        slider_index = 0;
    }

    if(index<0){
        slider_index = slide.length -1 
    }

    for(let i = 0; i<slide.length; i++){
        slide[i].style.display = "none"
        dots[i].classList.remove("active-dot")
    }

    slide[slider_index].style.display = "block"
    dots[slider_index].classList.add("active-dot")

}

showSlide(slider_index)

prev.addEventListener("click", function(){
    showSlide(slider_index = slider_index - 1)
})

next.addEventListener("click", function(){
    showSlide(slider_index = slider_index + 1)
})

document.querySelectorAll(".nav-dot").forEach((element)=>{
    element.addEventListener("click", function(){
    var dots = Array.prototype.slice.call(element.parentElement.children),
    dot_index = dots.indexOf(element)
    showSlide(slider_index = dot_index)
    })
})



////////////////////////////////////////////////////////////////////////////7



let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];


const input_element = document.querySelector(".input")
const output_operation_element = document.querySelector(".operation .value")
const output_result_element = document.querySelector(".result .value")


function showButton(){
    const btns_per_row = 4;
    let added_btns = 0;

    calculator_buttons.forEach(button=>{
        if(added_btns % btns_per_row == 0){
            input_element.innerHTML += `<div class="row"></div>`
        }
    
        const row = document.querySelector(".row:last-child")
    
        row.innerHTML += `<button id="${button.name}">
                            ${button.symbol}  
                            </button>                  
        `
        added_btns++;
    })
}


showButton()


input_element.addEventListener("click", event =>{
    let targetedBtn = event.target;

    calculator_buttons.forEach(button=>{
        if(button.name == targetedBtn.id){
            return calculate(button)
        }
    })
})

let data = {
    operation : [],
    result : []
}

function calculate(button){
    if(button.type == "operator"){
        data.operation.push(button.symbol)
        data.result.push(button.formula)

    }else if(button.type == "number"){
        data.operation.push(button.symbol)
        data.result.push(button.formula)

    }else if(button.type == "key"){
        if(button.name == "clear"){
            data.operation = []
            data.result = []

            updateOutputResult(0)
        }

        if(button.name == "delete"){
            data.operation.pop()
            data.result.pop()
        }

    }else if(button.type == "calculate"){
        let join_result = data.result.join("")

        let result;

        try{
            result = eval(join_result)
        }catch(error){
            if(error instanceof SyntaxError){
                result = "SyntaxError!"
                updateOutputResult(result)
                return;
            }
        }

        result = formatData(result)

        updateOutputResult(result)

        data.operation = []
        data.result = []

        data.operation.push(result)
        data.result.push(result)

        return;

    }     
    updateOutputOperation(data.operation.join(""))
}

function updateOutputOperation(operation){
    output_operation_element.innerHTML = operation;
}

function updateOutputResult(result){
    output_result_element.innerHTML = result;
}

function formatData(result){
    let max_Numbers = 10;
    output_precision = 5;
    if(digitCounter(result) > max_Numbers){
        if(isFloat(result)){
            let result_Int = parseInt(result)
            let result_Int_length = digitCounter(result_Int)
        
            if(result_Int_length > max_Numbers){
                return result.toPrecision(output_precision)
            }else{
                const countNumber = max_Numbers - result_Int_length
                return result.toFixed(countNumber)
            }
        }else{
            return result.toPrecision(output_precision)
        }
    }else{
        return result 
    }
}

function digitCounter(number){
    return number.toString().length
}

function isFloat(number){
    return number%1 !=0
}



////////////////////////////////////////////////////////////////////


const unlist = document.querySelector(".unlist")
const refresh = document.querySelector("#refresh")
const input = document.querySelector("#input-td")
LIST = []
id = 0;
const list = document.querySelector(".list")

const uncheck = "fa-circle"
const checked = "fa-check-circle"
const lineThrough = "lineThrough"

let dataLocal = localStorage.getItem("Todo")

if(dataLocal){
    LIST = JSON.parse(dataLocal)
    loadTodos(LIST)
    id = LIST.length

}else{
    LIST = []
    id = 0;
}

function loadTodos(array){
    array.forEach(function(index){
        showTodos(index.toDo, index.id, index.done, index.trash)
    })
}

refresh.addEventListener("click", function(){
    localStorage.clear()
    location.reload()

})

function showTodos(toDo, id, done, trash){

    const DONE = done ? checked : uncheck
    const LINE = done ? lineThrough : ""

    let text = `<li>
        <i id="circle-thin" class="far ${DONE}" job="complete" id="${id}"></i>
        <p class="text ${LINE}">${toDo}</p>
        <i id="trash" class="fas fa-trash-alt" job="delete" id="${id}"></i>
    </li>`

    let position = "beforeend"

    unlist.insertAdjacentHTML(position, text)

}
localStorage.setItem("Local", JSON.stringify(LIST))


document.addEventListener("keyup", event=>{
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            showTodos(toDo, id, false, false)
            LIST.push({
                toDo : toDo,
                id : id,
                done : false,
                trash : false
            })
        }
        input.value = ""
        id++;
        localStorage.setItem("Local", JSON.stringify(LIST))

    }

})
localStorage.setItem("Local", JSON.stringify(LIST))



function completeTodo(element){
    element.classList.toggle(checked)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ? false : true
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash  = true;
}
localStorage.setItem("Local", JSON.stringify(LIST))


list.addEventListener("click", function(event){
    let element = event.target
    let elementJOB = event.target.attributes.job.value

    if(elementJOB == "complete"){
        completeTodo(element)
    }else if(elementJOB == "delete"){
        removeTodo(element)
    }
    localStorage.setItem("Local", JSON.stringify(LIST))

})

localStorage.setItem("Local", JSON.stringify(LIST))


