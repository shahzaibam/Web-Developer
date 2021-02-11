let today = new Date();

let thisMonth = today.getMonth();

let thisYear = today.getFullYear();



let chooseYear = document.getElementById("year");
let chooseMonth = document.getElementById("month");



let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


let monthAndYear  = document.getElementById("monthAndYear");

displayCalendar(thisMonth, thisYear);

//A function to display the next month from the month on the calender when clicked

function nextMonth(){
    if(thisMonth === 11){
        thisYear = thisYear + 1;
    }else{
        thisYear = thisYear;
    }
    thisMonth = (thisMonth + 1) % 12; //we have only 12 months
    displayCalendar(thisMonth,thisYear);
}


//A function to display the previous month from the month on the calender when clicked

function previousMonth() {
    if(thisMonth === 0){
        thisYear = thisYear - 1;
        thisMonth = 11; 
    }else{
        thisYear = thisYear;
        thisMonth = thisMonth - 1;
    }
    displayCalendar(thisMonth, thisYear);
}


//A function that display the choosed month and year

function goTo(){
    thisYear = parseInt(chooseYear.value);
    thisMonth = parseInt(chooseMonth.value);
    displayCalendar(thisMonth, thisYear);
}

function displayCalendar(month, year){
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body");

    //clearing all previous cell

    tbl.innerHTML = "";

    //filling data about month and in the page via DOM

    monthAndYear.innerHTML  = months[month] + " " + year;
    chooseYear.value = year;
    chooseMonth.value = month;

    //creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++){
        //create table row
        let row = document.createElement("tr");

        //creating individual cells, filling them up with data
        for (let j = 0; j < 7; j++){
            if(i === 0 && j < firstDay){
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }else if(date>daysInMonth){
                break;
            }else{
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
                    cell.classList.add("bg-secondary");
                    cell.classList.add("text-white");
                }//color todays date
                cell.appendChild(cellText);

                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row)

    }





}

