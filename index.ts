import inquirer from "inquirer";
let questions :{
    number1: number,
    operator: string,
    number2: number
}= await inquirer.prompt([
    {
        type : "number",
        name :"number1",
        message: "enter your first number"
    },{
        type : "list",
        name : "operator",
        choices: ["+","-","*","/"],
        message:"enter your operator"
    },{
        type: "number",
        name : "number2",
        message: "enter your second number"
    }
])
const {number1 , number2 , operator }= questions
 if (number1 && number2 && operator){
    let result :number = 0
    if (operator === "+"){
        result =  (number1 + number2)
    }else if (operator ==="-"){
        result = (number1 - number2)
    }else if (operator === "*"){
        result = (number1 * number2)
    }else if (operator === "/"){
        result = (number1 / number2)
    } 
    console.log (`your result is ${result}`)
}else{console.log ("plese add valid input")}