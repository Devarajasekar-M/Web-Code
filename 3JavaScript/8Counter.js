
let count = 0;

document.getElementById("decreasezero").onclick = function(){
    count -= 1;
    document.getElementById("zero").innerHTML = count;
}
document.getElementById("resetzero").onclick = function(){
    count = 0;
    document.getElementById("zero").innerHTML = count;
}
document.getElementById("increasezero").onclick = function(){
    count += 1;
    document.getElementById("zero").innerHTML = count;
}