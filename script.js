const notes_body_first = document.querySelector("#notes-body-first")
const notes_body = document.querySelector("#notes-body-two")
const add_note = document.querySelector("#Add_note")
const btn_delete = document.querySelector(".delete-note")
const textarea = document.querySelector(".textarea")
let unlist = document.querySelector(".unlist")


let LIST = []

let id = 1;

function addNotes(notes, id , body){
    let text = `<div class="notes-body">
                    <ul class="unlist ">
                        <li class="list-item">
                            <p class="text1">Note${id}</p>
                            <p class="text2">${notes}</p>

                        </li>
                        <div class="button-div-del">
                            <button id="${id}" onclick="deleteNote(this.id)" class="delete-note">delete</button>
                        </div>
                    </ul>
                </div>`
    
    let position = "afterbegin"

    body.insertAdjacentHTML(position, text)
    
}


// deleteit.addEventListener("click", function(){
//     console.log("hola")
// })


add_note.addEventListener("click", function(event){
    const notes = textarea.value 
    // LIST.push(textarea.value)
    console.log(LIST)
    if(notes){
        addNotes(notes, id, notes_body)
        LIST.push({
            notes : textarea.value,
            id : id
        })
        console.log(LIST.notes)
    }
    textarea.value = ""
    id++
    console.log(LIST)

})

const renderNotes = function(LIST, filters){
    const filteredNotes = LIST.filter(function(note){ 
        document.querySelector(".add-note-li").style.display = "none"
        
        return note.notes.toLowerCase().includes(filters.toLowerCase())

    })

    document.querySelector("#notes-body-first").innerHTML = ""

    filteredNotes.forEach(function(note){
        //const noteEl = document.createElement("div")
        noteEl = note.notes
        noteid= note.id

        addNotes(noteEl, noteid, notes_body_first)
        //document.querySelector("#notes-body-first").appendChild(noteEl)
    })

    console.log(LIST)
}




document.getElementById("searchTxt").addEventListener("input", function(e){
    filters="";
    filters = e.target.value
    renderNotes(LIST, filters)
})

