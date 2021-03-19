const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
   
todoButton.addEventListener("click", addTodo);

function addTodo(event){
    event.preventDefault();

    //create todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create todo li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)

    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);


    todoInput.value = "";
}

todoList.addEventListener("click", deleteCheck);


function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove(); 
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed"); 
    }
}


