function myTime(){
    date = new Date();
    hour = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    day = date.getDate()
    month = date.getMonth()
    year = date.getFullYear()



function addZero(x){
    if(x<10){
        x = "0" + x;
    }

    return x;
}


day = addZero(day);
min = addZero(min);
sec = addZero(sec);


switch(month){
    case 0:
        month = "January"; break;
    case 1:
        month = "February"; break;
    case 2:
        month = "March"; break;
    case 3:
        month = "April"; break;
    case 4:
        month = "May"; break;
    case 5:
        month = "June"; break;
    case 6:
        month = "July"; break;
    case 7:
        month = "August"; break;
    case 8:
        month = "September"; break;
    case 9:
        month = "October"; break;
    case 10:
        month = "November"; break;
    case 11:
        month = "December"; break;
}


var mode;

if(hour>11){
    mode="PM"
}else{
    mode="AM"
}

document.getElementById("ampm").innerHTML = mode;


//function for 12 hour format

function timeformat(){
    if(hour>12){
        hour = hour - 12;
    }else if(hour == 0){
        hour = 12;
    }else{
        hour = hour;
    }
}

document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
document.getElementById("date").innerHTML = date + ":" + month + ":" + year;

}

function daysOfWeek(){
    var date = new Date();
    var days = date.getDate();
    switch(days){
        case 0:
            day = "Sunday";
            document.getElementById("sun").style.background = "tan";
            document.getElementById("sun").style.borderRadius = "2px";
            document.getElementById("sun").style.color = "red";
            document.getElementById("sun").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 1:
            day = "Monday";
            document.getElementById("mon").style.background = "tan";
            document.getElementById("mon").style.borderRadius = "2px";
            document.getElementById("mon").style.color = "black";
            document.getElementById("mon").style.boxShadow = "1px 1px 2px 2px white";
            break;
        
        case 2:
            day = "Tuesday";
            document.getElementById("tue").style.background = "tan";
            document.getElementById("tue").style.borderRadius = "2px";
            document.getElementById("tue").style.color = "black";
            document.getElementById("tue").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 3:
            day = "Wednesday";
            document.getElementById("wed").style.background = "tan";
            document.getElementById("wed").style.borderRadius = "2px";
            document.getElementById("wed").style.color = "black";
            document.getElementById("wed").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 4:
            day = "Thursday";
            document.getElementById("thu").style.background = "tan";
            document.getElementById("thu").style.borderRadius = "2px";
            document.getElementById("thu").style.color = "black";
            document.getElementById("thu").style.boxShadow = "1px 1px 2px 2px white";
            break;
        
        case 5:
            day = "Friday";
            document.getElementById("thu").style.background = "tan";
            document.getElementById("thu").style.borderRadius = "2px";
            document.getElementById("thu").style.color = "black";
            document.getElementById("thu").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 6:
            day = "Saturday";
            document.getElementById("thu").style.background = "tan";
            document.getElementById("thu").style.borderRadius = "2px";
            document.getElementById("thu").style.color = "black";
            document.getElementById("thu").style.boxShadow = "1px 1px 2px 2px white";
            break;

}
}

daysOfWeek()
