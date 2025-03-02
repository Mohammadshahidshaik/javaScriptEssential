
function calculateArea(){
    const lenght= document.getElementById('lenght').value;
    const width= document.getElementById('width').value;

    let area = lenght * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;


}