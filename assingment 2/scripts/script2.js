let promptName = prompt("Enter your name");

let greet = function(name) //expression

{
    return "<P>Welcome" + name
}

function greet(name) {
    return "Hello" + name + "!"
}

console.log(greet("Eric"))


let globalVar = "This is a global";

function greet (){ //creating the function
    let localVar = "This is local";
    console.log(globalVar);

}

greet(); //calling the function 

console.log(globalVar);

console.log(greet("Leah"));

function sum(a,b){
    return a+b;
}

console.log(sum(2,5));

//challenge: define a function called multiplyThree which accepts a number

function multiplyThree(number){
return number*3;
}

console.log(multiplyThree(3))

function multiplyThree2(number){
    let total = number*3;
    document.write(`<p>${number} x 3 = ${total}</p>
    `);
}
multiplyThree2(5);


