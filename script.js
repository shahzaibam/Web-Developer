function light(value){
    var pic;
    if(value === 0){
        pic = src = "/img/2020-11-26_223847.jpg"
    }
    else{
        pic = src = "/img/bulb on.jpg"
    }
    document.getElementById("bulb").src = pic;
}