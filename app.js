// write code here
let radius = prompt("กรอกรัศมี(ซม.)");
function CCF(r) {
    const pie = 3.14;
    let sum = 2*pie*r;
    alert(`ความยาวเส้นรอบวง = ${sum.toFixed(2)} ซม.`);
}

CCF(radius);