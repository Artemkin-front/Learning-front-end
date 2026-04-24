let num = document.getElementById("addNumArr");
let index = document.getElementById("delNum");
let i = 0;
let chetArr = [];
let arr = document.querySelector(".arr");
let checkch = document.querySelector(".checkChet");
let povtor = document.querySelector(".povtor");
let Arr = [];
let buf = [];
let buf2 =[];
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

function checkchet(){
    let p = 0;
    let delcheck = Array.from(document.querySelectorAll(".chet"));
    delcheck.forEach(element => {element.remove()});
    chetArr.splice(0,chetArr.length);
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
    console.log(chetArr);
    checkpovtor();
}
function checkpovtor(){
    let delcheck = Array.from(document.querySelectorAll(".chetPovtor"));
    delcheck.forEach(element => {element.remove()});
    buf = chetArr.slice();
    buf2.splice(0,buf2.length);
    for (let j = 0;buf.length > 0; j++) {
        for (let s = 1;s <= buf.length; s++) {
            if(buf[0] == buf[s]){
                buf2.push(buf[s]);
                povtorArr.push(s);
            }}
             if (povtorArr.length>0){
            buf2.push(buf[0]);
            buf.splice(0,1);
            console.log(povtorArr);
            console.log(buf);
            }
        for (let c = 1;povtorArr.length>0;c++ ){
            let m = povtorArr[0]-c;
            buf.splice(m,1);
            povtorArr.splice(0,1);
        }
         if ((povtorArr.length == 0) || buf.length > 0){
            buf.splice(0,1);
        }
    }
        if (buf2.length>0){
            for (let d = 0; d<buf2.length;d++){
            let addiv = document.createElement("div");
            povtor.append(addiv);
            addiv.innerText = buf2[d];
            addiv.className = "chetPovtor";
        }
    }
}

