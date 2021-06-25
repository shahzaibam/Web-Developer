const notes_body_first = document.querySelector("#notes-body-first")
const notes_body = document.querySelector("#notes-body-two")
const add_note = document.querySelector("#Add_note")
const btn_delete = document.querySelector(".delete-note")
const textarea = document.querySelector(".textarea")
const note_name = document.querySelector(".note-name")

let LIST = []

let id = 1;

let data = localStorage.getItem("save");

if(data){
    LIST = JSON.parse(data)
    loadNotes(LIST)
    id = LIST.length;

    function loadNotes(array) {
        array.forEach(function(index){
            addNotes(index.notes, index.id, notes_body)
      })
    }
}else{
    LIST = []
    id = 0;
}



document.querySelector(".deleteall").addEventListener("click", function(event){
    localStorage.clear()
    location.reload()
})

function addNotes(notes, id , body){
    let text = `<div class="notes-body">
                    <ul class="unlist">
                        <li class="list-item">
                            <p class="text1">Note-${note_name.value}</p>
                            <p class="text2">${notes}</p>

                        </li>
                        <div class="button-div-del">
                            <button  class="delete-note">delete</button>
                        </div>
                    </ul>
                </div>`
    
    let position = "afterbegin"

    body.insertAdjacentHTML(position, text)
    note_name.value = ""


    const unlist = document.querySelector(".unlist")

    document.querySelector(".delete-note").addEventListener("click", function(){
        unlist.parentElement.style.display = "none"
        localStorage.includes(LIST[id]).pop()

        
    })
}

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
    localStorage.setItem("save", JSON.stringify(LIST))

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
    localStorage.setItem("save", JSON.stringify(LIST))

}

document.getElementById("searchTxt").addEventListener("input", function(e){
    filters="";
    filters = e.target.value
    renderNotes(LIST, filters)
})

