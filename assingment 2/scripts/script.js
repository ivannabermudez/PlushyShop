console.log("Scripts");
var user = "Jessica";
var age = 22; //string
var gpa = 3.2; //number
var isActive = true; //boolean

document.write('<p class="text"> Name:' + user + '</p><p> Student:' + isActive +'</p><p> GPA:' +gpa + '</p>')

document.write(
`
<p class="text">Name: ${user} </p>
<p class="text">Student: ${isActive} </p>
<p class="text">GPA: ${gpa*2} </p>
`
);

var numberOfChildren = "Jessica";
var partnerName = "John";
var geographicLocation = "Panama";
var jobTitle = "Lawyer"; 

document.write(`<p class="text"> You will be a:${jobTitle}</p><p> in:${geographicLocation}</p><p> and married to:${partnerName}</p>`)

document.write(`<p class="text"> You will be a ${jobTitle} in ${geographicLocation} and married to ${partnerName}</p>`)

let userName; // initialization
userName=prompt("Enter your name:"); //assignation
let userEmail = prompt("Enter your email")
let salaryMonthly = prompt("Enter your salary");
const m = 12; // const doesnt change// let yearlySalary = salaryMonthly*m;
userName= "Leah"

document.write(`
<p>Name: ${userName}</p>
<p>Email: ${userEmail}</p>
<p>Name: ${salaryMonthly}</p>


`);