//Array Notes.js

// const notes = ["Note 1", "Note 2", "Note 3"];

// //.pop Eliminates the last element of an array
// console.log(notes.pop())
// //.push Inserts at the last position a new element
// notes.push("My new Note")

// //.shift removes the first element of an array
// console.log(notes.shift())
// //.unshift inserts a new element in an array
// notes.unshift("My first note")

// notes.splice(1, 1, "This is the secon new item")

// notes[2] = "This is the new Third Note"

// notes.forEach(function(item, index){
//     console.log(index)
//     console.log(item)
// })


//Counting with loop

// for (let count = 0; count <= 3 ; count++){
//     console.log(count)
// }

// for (let count = notes.length - 1; count<=notes.length; count++){
//     console.log(notes[count])
// }

const notes = [ {
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habits to work On",
    body: "Exercise. Eating a bit better"
}, {
    title: "Office modification",
    body:  "Get a new seat"
}]

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return note.title === noteTitle
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}



// console.log(findNotes(notes, "work"))

// const note = findNote(notes, "Habits to work On")
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note,index){
//     return notes.title === "Habits to work On"
// })

// console.log(index)

sortNotes(notes)
console.log(notes)

//Array Todos.js

// const todos = ["Have Breakfast", "Study", "Have Lunch", "Go to Gym", "Have dinner"];

//Delete the third item
// todos.splice(2,1)
// console.log(todos)

//add a new item onto the end
// todos.push("Go to sleep")

//Remove the first item form the list
// todos.shift()

// console.log(`You have ${todos.length} todos`)


// todos.forEach(function(todo,index){
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

const todos = [{
    text: "Have Breakfast",
    completed: true
},{
    text:  "Study",
    completed: true
},{
    text: "Have Lunch",
    completed: true
}, {
    text: "Go to Gym",
    completed: false
}, {
    text: "Have dinner",
    completed: false
}]


const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return todo.completed === false
    })
}

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(a.completed === false && b.completed === true){
            return -1
        }else if (b.completed === false && a.completed === true){
            return 1
        }else{
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)



//console.log(getThingsToDo(todos))


// let deleteTodo = function(todos, deleteItem){
//     const index = todos.findIndex(function (todo   ) {
//         return todo.text.toLowerCase() === deleteItem.toLowerCase()
//     })
//     if(index > -1){
//         todos.splice(index,1)
//     }
// }

// deleteTodo(todos, "Have Lunch")
// console.log(todos)




///Expense tracker

const account = {
    name: "shahzaib",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getSummary: function(){
        let totalExpenses = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        return `${account.name} has ${totalExpenses}$ in expenses`
    }

}

account.addExpenses("Rent", 950)
account.addExpenses("coffe", 2)
console.log(account.getSummary())
