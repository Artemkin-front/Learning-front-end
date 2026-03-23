function test(){
let x = document.getElementById("Firstnum");
let y = document.getElementById("Secondnum");
let val_x = x.value;
let val_y = y.value;
alert (` Значение x = ${val_x}  `);
alert(` Значение y = ${val_y}`);
    if ((Math.abs(val_x) < 1) && (Math.abs(val_y) < 0.7) && ((val_x*val_x + val_y*val_y) <=1)) {
        alert('Точка принадлежит заштрихованной области');
    } else if ((Math.abs(val_x)<=1) && (Math.abs(val_y) == 0.7 ) && (val_x * val_x + val_y * val_y <= 1)) {
        alert('Точка на границе заштрихованной области');
    } else if ((Math.abs(val_y) > 0.7) && (((val_x ** 2) + (val_y ** 2)) <= 1)) {
        alert('Точка принадлежит окружности');
    } else {
        alert("Точка не принадлежит окружности");
        console.log(typeof(val_x))
}
}
