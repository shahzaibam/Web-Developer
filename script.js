const clear = document.querySelector(".clear")
const list = document.querySelector(".list")
const input = document.querySelector("#input")
const uncheck = "fa-circle"
const check = "fa-check-circle"
const lineThrough = "lineThrough"
let LIST=[]
let id = 0;

const data = localStorage.getItem("TODO")

if(data){
    LIST = JSON.parse(data)
    loadTodos(LIST)
    id = LIST.length
}else{
    LIST = []
    id = 0;
}

function loadTodos(array){
    array.forEach(function(index){
        addTodo(index.toDo, index.id, index.done, index.trash)
    })
}

clear.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})


function addTodo(toDo, id, done, trash){

    if(trash){return;}

    const DONE = done ? check : uncheck
    const LINE = done ? lineThrough : ""

    const text = `      
        <li>
            <i class="far ${DONE}" job="complete" id="${id}"></i>
            <p class="text ${LINE}">${toDo}</p>
            <i class="fas fa-trash" job="delete" id="${id}"></i>
        </li>
    `

    const position = "beforeend"


    list.insertAdjacentHTML(position, text)
}

localStorage.setItem("TODO", JSON.stringify(LIST))

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value
        if(toDo){
            addTodo(toDo, id, false, false)
            LIST.push({
                toDo : toDo,
                id : id,
                done : false,
                trash : false,
            })
            input.value = ""
            id++;
            localStorage.setItem("TODO", JSON.stringify(LIST))
        }
    }


})

function completeTodos(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ? true : false
}

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true;
}



list.addEventListener("click", function(event){
    let element = event.target
    let elementJOB = event.target.attributes.job.value;

    if(elementJOB === "complete"){
        completeTodos(element)
    }else if(elementJOB === "delete"){
        removeTodo(element)
    }
    localStorage.setItem("TODO", JSON.stringify(LIST))
})

localStorage.setItem("TODO", JSON.stringify(LIST))