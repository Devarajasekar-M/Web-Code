// A variable is a container for storing data
// A variable is behaves as if it was the value that it contains

// Two steps:
//  1. Declaration (3keywords - var, let, const)
//  2. Assignment (= assignment operator)

let firstName = "Deva"; // Strings - contains of char
let student = true; // Booleans - contains true or false
let age = 22; // Numbers - contains signed integer-32-bit-range [-2147483648 to 2147483647] & unsigned integer-32-bit-range [0 to 4294967295]

console.log("Your first name is ",firstName)
console.log("Your are ",age," years old")
console.log("Entrolled: ",student)

document.getElementById("id1").innerHTML = "Your first name is " + firstName;
document.getElementById("id2").innerHTML = "You are " + age + " years old";
document.getElementById("id3").innerHTML = "Entrolled : " + student;