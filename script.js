let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];


let input_element = document.querySelector(".input")
let output_result_element = document.querySelector(".result .value")
let output_operation_element = document.querySelector(".operation .value")
let value = document.querySelector(".value")


function createButtons(){
    const btn_per_row = 4;
    let added_buttons = 0;

    calculator_buttons.forEach((button) =>{
        if( added_buttons % btn_per_row  == 0){
            input_element.innerHTML += `<div class="row"></div>`
        }
    
        const row = document.querySelector(".row:last-child")
    
        row.innerHTML += `<button id="${button.name}">
                        ${button.symbol}
                        </button>
                        `
        added_buttons++;
    })


}

createButtons() 


input_element.addEventListener("click", event =>{
    let targetBtn = event.target;

    calculator_buttons.forEach(button=>{
        if(button.name == targetBtn.id){
            return calculator(button)
        }
    })
})

let data = {
    operation : [],
    result : [0]
}

function calculator(button){
    if(button.type == "operator"){
        data.operation.push(button.symbol)
        data.result.push(button.formula)
    }

    else if(button.type == "number"){
        data.operation.push(button.symbol)
        data.result.push(button.formula)
    }

    else if(button.type == "key"){
        if(button.name == "clear"){
            data.operation = []
            data.result = []
            updateOutputResult()
        }else if(button.name == "delete"){
            data.operation.pop()
            data.result.pop()
        }
    }

    else if(button.type == "calculate"){
        let join_result = data.result.join("")

        let result;

        try{
            result = eval(join_result)
        }catch(error){
            if(error instanceof SyntaxError){
                result = "SyntaxError!"
                updateOutputResult(result)
                return;

            }
        }

        result = formatResult(result)

        updateOutputResult(result)

        data.operation = []
        data.result = []

        data.operation.push(result)
        data.result.push(result)
        return;
    }
    updateOutputOperation(data.operation.join(""))
}

function updateOutputOperation(operation){
    output_operation_element.innerHTML = operation
}

function updateOutputResult(result){
    output_result_element.innerHTML = result
}


function formatResult(result){
    let totalNumbers = 10;
    const output_precision = 5;

    if(digitCounter(result) > totalNumbers){
        if(isFloat(result)){
            const resultInt = parseInt(result)
            const resultInt_length = digitCounter(resultInt)

            if(resultInt_length > totalNumbers){
                return result.toPrecision(output_precision)
            }else{
                const numOfDigits  =  totalNumbers - resultInt_length
                return result.toFixed(numOfDigits)
            }

        }else{
            return result.toPrecision(output_precision)
        }
    }else{
        return result;
    }
}

function digitCounter(number){
    return number.toString().length;
}

function isFloat(number){
    return number % 1 !=0
}