function calculateArea() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is ${area}`;
}
function add(){

    const g1 = parseFloat(document.getElementById('g1').value);
    const g2 =parseFloat(document.getElementById('g2').value);
    const g3 = parseFloat(document.getElementById('g3').value);
    const tot = g1 + g2 + g3;
    document.getElementById('total').innerText = `The total Amountis:$ ${tot}`;
}