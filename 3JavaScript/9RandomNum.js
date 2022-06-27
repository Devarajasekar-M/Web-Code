let x;
let y;
let z;
let a;
let b;
let c;

document.getElementById("rollsubmit").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    c = Math.floor(Math.random() * 6) + 1;
    document.getElementById("id1").innerHTML = x;
    document.getElementById("id2").innerHTML = y;
    document.getElementById("id3").innerHTML = z;
    document.getElementById("id4").innerHTML = a;
    document.getElementById("id5").innerHTML = b;
    document.getElementById("id6").innerHTML = c;
}