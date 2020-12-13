let formData;

const signUp = function (e) { 
    console.log("hi")
     formData = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value,
        pwd : document.getElementById("pwd").value
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
    
    e.preventDefault();
    
}
var j = localStorage.getItem("formData")

//console.log(signUp)  


// let formData = {
//     fname : "first name",
//     lname : "last name",
//     email : "email",
//     pwd : "pasword"
//     }
// localStorage.setItem("formData", JSON.stringify(formData));
// // console.log(localStorage.getItem("formData"));

// var a =""
// var b =""
// var c =""
// var d = ""


// const signUp = function (e) { 
//     console.log("hi")
//     a = document.getElementById("fname").value,
//     b = document.getElementById("lname").value,
//     c = document.getElementById("email").value,
//     d = document.getElementById("pwd").value
    
//     formData = {
//                 fname : document.getElementById("fname").value,
//                 lname : document.getElementById("lname").value,
//                 email : document.getElementById("email").value,
//                 pwd : document.getElementById("pwd").value
//             }
        

//     e.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formData));
    
// }

// console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(d);