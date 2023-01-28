//loops
//for
let products = []; //arrays
function displayNumbers(){
    for(let i=0; i,101; i+=10){
        document.write(`<li>${i}</li>`);
    }
}

//switch
let op = prompt ("Enter your option" );
switch(op){
    case '1' :
        displayNumbers();
    case '2' :
        console.log("Option 2");
        break;    
    default;
        console.log('Sorry, this is not an option');
}