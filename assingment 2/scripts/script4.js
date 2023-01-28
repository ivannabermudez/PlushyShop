//ASSINGMENT 2
//  Programming Fundamentals JavaScript
// Write a program where the user enters information on the prompt (product’s name, price and qty) and save the info in variables, then you have to display on the console the info, subtotal and the final price adding taxes. You should have:  

// price Calculation
// tax Calculation
// display Information
 
function plushyShop(){
    let productName
    let productAmount; 
    productAmount = prompt("Enter amount of plushies");
    let price = 4.99 
    let tax = (price * .0725)
    let totalPrice = (price + tax)

    
    console.log ("Product name:" + productName)
    console.log ("Product price:" + price)
    console.log ("Product amount:" + productAmount)
    console.log ("Total price after taxes:" + totalPrice)

    document.write(`
<p>Your Cart: ${productAmount}</p>
<p>Your Total after taxes: ${totalPrice}</p>
<p>Thank you for shopping at the pushy shop</p>


`);
}
    
