let num = document.getElementById("addNumArr");
let index = document.getElementById("delNum");
let i = 0;
let chetArr = [];
let arr = document.querySelector(".arr");
let checkch = document.querySelector(".checkChet");
let Arr = [];
let buf = [];
let povtorArr = [];
function addDiv(){
    let addiv = document.createElement("div");
    let numAdd = num.value;
    Arr.push(numAdd);
    arr.append(addiv);
    addiv.innerText = Arr[i];
    addiv.className = "num";
    i++;
    console.log(Arr);
    checkchet();
}

function delDiv(){
    let clas = Array.from(document.querySelectorAll(".num"));
    let indx = index.value;
    Arr.splice(indx,1);
    clas[indx].remove();
    i--;
    checkchet();
}
let p = 0;
function checkchet(){
    let delcheck = Array.from(document.querySelectorAll(".chet"));
    delcheck.forEach(element => {element.remove()});
    for (let j = 0; j <= Arr.length;j++) {
       if ((Arr[j] % 2 )== 0){
            let addiv = document.createElement("div");
            chetArr.push(Arr[j]);
            console.log(j);
            checkch.append(addiv);
            addiv.innerText = chetArr[p];
            addiv.className = "chet";
            p++;
        }
    }
}
buf = Arr;
function checkpovtor(){
    for (let j = 0;buf.length > 0; j++) {
        for (let s = 1;s <= buf.length; s++) {
            if(buf[0] == buf[s]){
                povtorArr.push(buf[s]);
                buf.splice(s,1);
                s--;
            } else {
                buf.splice(0,1);
            }
        }
    }
    console.log(buf);
}