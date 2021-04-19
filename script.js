//Greeting user

let greetUser = function() {
    console.log("Welcome User!")
}

console.log(greetUser())


// a function has a input(argument), code, and a output(return value) .

let square = function(num){
    let result = num * num;
    return result;
}

let value = square(3);
let otherValue = square(10);

console.log(value, otherValue)
//console.log(otherValue)


//Challange Area


let FtoCelsius = function(farenheit){
    let fToc_formula = (farenheit - 32) / 1.8;

    return fToc_formula;
};

let resultOne = FtoCelsius(32);
let resultTwo = FtoCelsius(68);
console.log(resultOne);
console.log(resultTwo);


////////////////UNDEFINED AND NULL

//Undefined for variables
let name;
//name = "shahzaib"

if (name===undefined){
    console.log("please provide us your name")
}else{
    console.log(name)
}

//Undefined for functions

let example = function(num){
    console.log(num)
}

example()


//Multiple arguments 

let add = function(a,b,c){
    return a + b + c
}

let result = add(10,1,5)
console.log(result)


//Default Arguments 

let gameScore = function(username = "Anonymous", score = 0){
    return `Your name is ${username} and your score is ${score}`
}

let table =  gameScore("Shebi", 100)
console.log(table)


//Challange area Tip Percent


let tipCalc = function(total, tipPercent){
    let calc = total*tipPercent/100
    return `A ${tipPercent}% tip on ${total}$ would be ${calc}$`
}

let calculate = tipCalc(100,20)
console.log(calculate)


//Building a Grade Calculator


let gradeCalc = function(score, totalScore){   

    let percent = score/totalScore*100

    let letterGrade = ""

    if(percent < 50 || percent === 0){
        letterGrade = "F"
    }
    else if(percent < 60 || percent === 50){
        letterGrade = "E"
    }
    else if(percent < 70 || percent === 60){
        letterGrade = "D"
    }
    else if(percent < 80 || percent === 70){
        letterGrade = "C"
    }
    else if(percent<90 || percent === 80){
        letterGrade = "B"
    }
    else if(percent <= 100 || percent === 90){
        letterGrade = "A"
    }else{
        console.log("You haven't presented at the exam")
    }

    return `You got a ${letterGrade} and your percentatge is ${percent}%`
}

let yourGrade = gradeCalc(8.5,10)
console.log(yourGrade)





