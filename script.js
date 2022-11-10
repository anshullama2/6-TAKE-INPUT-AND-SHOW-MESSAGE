var inpt = document.querySelector("input");
var btn = document.querySelector("button");
var show = document.querySelector("button+h3+h3");
btn.onclick = go;

function go(){
    show.innerHTML = inpt.value;
    alert("this is text  \n"+inpt.value);
}