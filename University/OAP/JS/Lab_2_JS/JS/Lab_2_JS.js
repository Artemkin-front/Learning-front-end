function getresult() {
    let el = document.getElementById("numOne");
    let x = Number(el.value); 
    let e = document.getElementById("numSecond");
    let eps = Number(e.value);
    let n = 1;
    let F = x;
    let a = x;
    let s;
    if ((Math.abs(x) >= 1) || (eps > 1) || (eps < 0) || (Math.abs(x) <= 0 || x <= eps)){
        if (Math.abs(x) >= 1 || Math.abs(x)<=0) {
            alert("Введите значение x удовлетворяющее ОДЗ");
        } else if(eps>1 || eps<0 || x<=eps) {
            alert("Введите значение eps удовлетворяющее ОДЗ");
        }
     }
    else {
    while (Math.abs(a)>=eps) {
        a = a * (-((2 * n - 1) * x * x) / (2 * n * (2 * n + 1)));
        F =F + a;
        n++;
    }
        s = Math.log((x + Math.sqrt(x * x + 1)));
        let res = document.getElementById("res");
        res.value = F;
        let res1 = document.getElementById("res1");
        res1.value = s;
}
   
}
