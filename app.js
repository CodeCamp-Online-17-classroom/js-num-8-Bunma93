// write code here
let radius = prompt("กรอกรัศมี(ซม.)");
function CCF(r) {
    let sum = 2*Math.PI*r;
    alert(`ความยาวเส้นรอบวง = ${sum.toFixed(2)} ซม.`);
}

CCF(radius);