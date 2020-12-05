const names = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");


form.addEventListener("submit", (e) => {
    let messages = []
    if(names.value === "" || names.value === null){
        messages.push("name is required")
    }

    if(password.value.length <= 6){
        messages.push("password must be longer than 6 characters")
    }

    if(password.value.length >= 20){
        messages.push("password must be less than 20 characters")
    }

    if(password.value === "password"){
        messages.push("password cannot be password")
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(", ")
    }
})