// Type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

let age;
age = window.prompt("Enter your age ");
// I/P 22 so O/P - 221 because default input type is string
age = Number (age); // must put capital letter
age += 1; 
console.log(age)

let x;
let y;
let z;
 x = Number(3.14);
 y = String(3.14);
 z = Boolean(""); // null == false

 // Typeof - used to find data type
 console.log(x, typeof x)
 console.log(y, typeof y)
 console.log(z, typeof z)