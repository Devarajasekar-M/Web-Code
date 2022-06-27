
let a;
let b;
let c;

// a = window.prompt("Enter side A :");
// a = Number(a);
// b = window.prompt("Enter side B :");
// b = Number(b);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(" The side of C is :" , c);

// same problem using html

document.getElementById("submit").onclick = function(){
    a = document.getElementById("ainput").value;
    b = document.getElementById("binput").value;
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "C side value is : " + c;
}