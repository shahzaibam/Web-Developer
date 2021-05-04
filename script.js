const clear = document.querySelector(".clear")
const list = document.querySelector(".list")
const input = document.querySelector("#input")

let LIST = []
let id = 0;

const check = "fa-check-circle"
const uncheck = "fa-circle"
const lineThrough = "lineThrough"

const data = localStorage.setItem("TODO", JSON.stringify(LIST))




function addTodo(toDo, id, done, trash){

    if(trash){return;}

    const TRUE = done ? check : uncheck
    const LINE = done ? lineThrough : ""
    

    let text = `
    <li class="item">
        <i class=" far ${TRUE}" id="${id}" job="complete"></i>
        <p class="text ${LINE}">${toDo}</p>
        <i class="fas fa-trash-alt" id="${id}" job="delete"></i>
    </li> 
    `

    let position = "beforeend"

    list.insertAdjacentHTML(position, text)
    
}



//key press

document.addEventListener("keypress", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addTodo(toDo, id, false, false)
            LIST.push({
                toDo : toDo,
                id : id,
                done : false,
                trash : false,
            })
            id++;
            input.value = ""
        }
        localStorage.setItem("TODO", JSON.stringify(LIST))
    }     
})


function completeTodos(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ? false : true
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true
}

list.addEventListener("click", function(event){
    let element = event.target;
    let elementJOB = event.target.attributes.job.value;

    if(elementJOB == "complete"){
        completeTodos(element)
    }else if(elementJOB == "delete"){
        removeTodo(element)
    }
    localStorage.setItem("TODO", JSON.stringify(LIST))
})

localStorage.setItem("TODO", JSON.stringify(LIST))
