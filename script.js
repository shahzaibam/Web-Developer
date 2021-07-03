let bookname = document.querySelector(".book-name")
const createdBook = document.querySelector(".createdBook")
let author = document.querySelector(".author_input")
const delete_all = document.querySelector(".delete_all")


delete_all.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})

// function Book(name, author, type){
//     this.name = name.value;
//     this.author = author.value;
//     this.type = type;
// }

// function Hola(name, author, type) {
//     name = this.name;
//     author = this.author;
//     type = this.type;
// }

let LIST=[{
    nombre : bookname.value,
    author : author.value,
    type : "",
}]

let data = localStorage.getItem("BookSave");

if(data){
    LIST = JSON.parse(data)
    loadNotes(LIST)
    id = LIST.length;

    function loadNotes(array) {
        array.forEach(function(index){
            showBooks(index.name, index.author, index.type)
      })
    }
}else{
    LIST = []
    id = 0;
}

// localStorage.setItem("Hola", JSON.stringify(Hola))

// if(localStorage.getItem("Hola")){
//     console.log("bien")

// }else{
//     console.log("mal")
// }


// let data = localStorage.getItem("BookSave")

// if(data){
//     localStorage.getItem("BookSave", JSON.parse())
// }

function showBooks(name, author, type){
    let text = `
        <div class="types-of-books-grey">
            <p class="nameBook">${name}</p>
            <p class="authorBook">${author}</p>
            <p class="typeBook">${type}</p>
        </div>

        <!--<div class="types-of-books">
            <p>${name}</p>
            <p>${author}</p>
            <p>${type}</p>
        </div>-->
    `

    let position = "beforebegin"

    createdBook.insertAdjacentHTML(position, text)
    
}
// localStorage.getObject("BookSave", JSON.stringify(Book))

document.querySelector(".btn-add-block").addEventListener("click", function(){
    Myfunction()
})

function Myfunction(e){
    let nombre = document.querySelector(".book-name") 
    let author = document.querySelector(".author_input")
    let type;


    const fiction = document.querySelector("#fiction")
    const computer_prg = document.querySelector("#computer_prg")
    const cooking = document.querySelector("#cooking")


    if(fiction.checked){
        type = fiction.value;

    }else if(computer_prg.checked){
        type = computer_prg.value;

    }else if(cooking.checked){
        type = cooking.value;
    }

    setTimeout(function(){ alert("Your book has added Succesfully"); }, 100);


    let book = LIST.push({
        nombre : nombre.value,
        author : author.value,
        type : type
    })

    console.log(book)

    showBooks(nombre.value, author.value, type)

    bookname.value = ""
    author.value = ""

    if(bookname.value == undefined){
        console.log("you cannot add boook")
    }

    localStorage.setItem("BookSave", JSON.stringify(LIST))
    console.log(localStorage.getItem("BookSave"))

}
