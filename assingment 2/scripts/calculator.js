function Calculator(){
    console.log("Calculating");
    let num1= Number(prompt("Enter the number 1: "));
    let num2= Number(prompt("Enter the number 2:"));
    console.log(num1,num2);
sum(num1, num2);
minus(num1, num2);
mult(num1, num2)
div()
}

function sum(a,b){
    document.getElementById("results").innerHTML= `<p> ${a} + ${b} = ${a + b} </p>`
}
function minus(a,b){
    document.getElementById("results").innerHTML= `<p> ${a} - ${b} = ${a - b} </p>`
}
function mult(a,b){
    document.getElementById("results").innerHTML= `<p> ${a} * ${b} = ${a * b} </p>`
}
function div(a,b){
    document.getElementById("results").innerHTML= `<p> ${a}  ${b} = ${a + b} </p>`
}





// sum(num1, num2){
// return num1 + num2; 
// }

// console.log (sum)

// function multiply(num1, num2){
//     return
// }



