const list = document.querySelector(".list")
const input = document.querySelector(".input")
let LIST = [];
let id = 0;
const clear = document.querySelector("#refresh")

const check = "fa-check-circle"
const uncheck = "fa-circle"
const lineThrough = "lineThrough"

let data = localStorage.getItem("TODOS")

if(data){
    LIST = JSON.parse(data)
    loadTodos(LIST)
    id = LIST.length
}else{
    LIST = [];
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




function addTodo(toDo, id, done, trash ){
    if(trash){return;}

    const DONE = done ? check : uncheck
    const LINE = done ? lineThrough : ""

    const text = `<li>
        <i class="far ${DONE}" job="complete" id="${id}"></i>
        <p class="text ${LINE}">${toDo}</p>
        <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
    </li>`

    const position = "beforeend"


    list.insertAdjacentHTML(position, text)
    localStorage.setItem("TODOS", JSON.stringify(LIST))

}


addTodo("dr coffe")

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addTodo(toDo, id,false, false)
            LIST.push({
                toDo : toDo,
                id : id,
                done : false,
                trash : false
            })
        }
        input.value = "";
        id++; 
    }
    localStorage.setItem("TODOS", JSON.stringify(LIST))

})
localStorage.setItem("TODOS", JSON.stringify(LIST))


function completeTodos(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeTodos(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    let element = event.target
    let elementJOB = event.target.attributes.job.value;

    if(elementJOB === "complete"){
        completeTodos(element)
    }else if(elementJOB === "delete"){
        removeTodos(element)
    }
    localStorage.setItem("TODOS", JSON.stringify(LIST))

})

localStorage.setItem("TODOS", JSON.stringify(LIST))
