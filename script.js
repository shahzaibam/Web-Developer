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
