let num = document.getElementById("addNumArr");
let index = document.getElementById("delNum");
let arr = document.querySelector(".arr");
let Arr = [];
let lom = [];
let i = 0;
function lomuto(a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function addDiv(){
    
    let addiv = document.createElement("div");
    let numAdd = num.value;
    Arr.push(numAdd);
    arr.append(addiv);
    addiv.innerText = Arr[i];
    addiv.className = "num";
    i++;
    lom = Arr.slice();
    lom.sort(lomuto);
    console.log(lom);
}
function delDiv(){
    let clas = Array.from(document.querySelectorAll(".num"));
    let indx = index.value;
    Arr.splice(indx,1);
    clas[indx].remove();
    i--;
}

