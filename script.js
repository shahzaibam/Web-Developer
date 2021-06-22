const notes_body = document.querySelector(".notes-body")
const button_div = document.querySelector(".button-div")
const textarea = document.querySelector(".textarea")
const LIST = [];

function addNotes(notes){
    let text = `<div class="notes-body">
    <ul class="unlist">
        <li>
            <p class="text1">${notes}</p>
            <p class="text2">Shop for tomato, potato and vegetables</p>
            <i class="btn"><button>Delete Note</button></i>
        </li>
    </ul>
</div>`
    
    let position = "beforebegin"

    notes_body.insertAdjacentHTML(position, text)
}

addNotes("hola me llamo juan")
addNotes("hola me llamo juan")


button_div.addEventListener("click", function(event){
    const notes = textarea.value 
    
})



