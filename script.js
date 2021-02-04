function startTime(){
    var today = new Date();
    var date = today.getDate()
    var month = today.getMonth()
    var year = today.getFullYear()
    var hours = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds() 

    function addZero(x){
        if(x<10){
            x = "0" + x
        }
        return x;
    }

    date = addZero(date)
    min = addZero(min)
    sec = addZero(sec)

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
    if(hours>11){
        mode = "PM"
    }else{
        mode = "AM"
    }

    document.getElementById("ampm").innerHTML = mode;


    function timeFormat(){
        if(hours>12){
            hours = hours - 12;
        }else if(hours == 0){
            hours = 12
        }else{
            hours = hours
        }
    }

    document.getElementById("time").innerHTML = hours + ":" + min + ":" + sec;
    document.getElementById("date").innerHTML = date + ":" + month + ":" + year;

}

function daysOfWeek(){
    var date = new Date();
    var days = date.getDate();

    switch(days){
        case 0:
            days = "Sunday";
            document.getElementById("sun").style.background = "tan";
            document.getElementById("sun").style.borderRadius = "2px";
            document.getElementById("sun").style.color = "red";
            document.getElementById("sun").style.boxShadow = "1px 1px 2px 2px white";
            break;
        case 1:  
            days = "Monday";
            document.getElementById("mon").style.background = "tan";
            document.getElementById("mon").style.borderRadius = "2px";
            document.getElementById("mon").style.color = "red";
            document.getElementById("mon").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 2:
            days = "Tuesday";
            document.getElementById("tue").style.background = "tan";
            document.getElementById("tue").style.borderRadius = "2px";
            document.getElementById("tue").style.color = "red";
            document.getElementById("tue").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 3:  
            days = "Wednesday";
            document.getElementById("wed").style.background = "tan";
            document.getElementById("wed").style.borderRadius = "2px";
            document.getElementById("wed").style.color = "red";
            document.getElementById("wed").style.boxShadow = "1px 1px 2px 2px white"; 
            break;

        case 4:
            days = "Thursday";
            document.getElementById("thu").style.background = "tan";
            document.getElementById("thu").style.borderRadius = "2px";
            document.getElementById("thu").style.color = "red";
            document.getElementById("thu").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 5:  
            days = "Friday";
            document.getElementById("fri").style.background = "tan";
            document.getElementById("fri").style.borderRadius = "2px";
            document.getElementById("fri").style.color = "red";
            document.getElementById("fri").style.boxShadow = "1px 1px 2px 2px white";
            break;

        case 6:
            days = "Saturday";
            document.getElementById("sat").style.background = "tan";
            document.getElementById("sat").style.borderRadius = "2px";
            document.getElementById("sat").style.color = "red";
            document.getElementById("sat").style.boxShadow = "1px 1px 2px 2px white";
            break;
    }
}

daysOfWeek()


