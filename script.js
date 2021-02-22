let vacationCalc = document.getElementById("vacationCalc")

vacationCalc.addEventListener("submit", calcExpenses);


function calcExpenses(e){
    e.preventDefault()

    let destiny = document.getElementById("destiny").value;
        budget = document.getElementById("budget").value;
        acomodation = document.getElementById("acomodation").value;
        transport = document.getElementById("transport").value;
        food = document.getElementById("food").value;


    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
    let balance = budget - expenses

    console.log(destiny, budget, balance)
    
}