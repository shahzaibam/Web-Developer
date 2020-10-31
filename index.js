const loginForm = document.getElementsByClassName("loginform")
const loginButton = document.getElementsByClassName("submit")
const loginErrorMsg = document.getElementsByClassName("errorpara")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


    if (username === "user" && password === "shebi") {
        alert("YOU HAVE SUCCESFULLY LOGGED IN");
        location.reload();
    }else{
        loginErrorMsg.style.opacity = 1;
    }

})