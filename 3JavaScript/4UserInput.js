// How to accept user input

// there are two way to get input from user

// 1. Easy way a window prompt

let user = window.prompt("Enter your name ");
console.log(user);

// 2. Difficult way HTMl textbox

let collage;
document.getElementById("mybutton").onclick = function() {

    collage = document.getElementById("mytext").value;
    console.log(collage);

    // ( ) -> between this we want to put (,)
    // after = -> we want to put (+)
    document.getElementById("mylabel").innerHTML = "your collage is : " + collage; 
}   