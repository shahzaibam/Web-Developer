const bookname = document.querySelector(".book-name")
const createdBook = document.querySelector(".createdBook")


// function Book(name, author, type){
//     this.name = name.value;
//     this.author = author.value;
//     this.type = type;
// }

function Hola(name, author, type) {
    name = this.name;
    author = this.author;
    type = this.type;
}

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
    const name = document.querySelector(".book-name") 
    const author = document.querySelector(".author_input")
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


    let book = new Hola(name, author, type)
    console.log(book)

    showBooks(name.value, author.value, type)


}

// localStorage.setObject("BookSave", JSON.stringify(Book))
