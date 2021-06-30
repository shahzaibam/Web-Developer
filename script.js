const bookname = document.querySelector(".book-name")
const createdBook = document.querySelector(".createdBook")

function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

function showBooks(name, author, type){
    let text = `
        <div class="types-of-books-grey">
            <p>${name}</p>
            <p>${author}</p>
            <p>${type}</p>
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

    let book = new Book(name, author, type)
    showBooks(name.value, author.value, type)
    console.log(book)


}
