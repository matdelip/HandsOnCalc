// functions to perform addition
function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// function to perform subtraction
function subtract(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// function to perform multiplication
function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// function to perform division
function divide(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerHTML = 'Result: Cannot divide by zero ';
    } else {
        let result = num1 / num2;
        document.getElementById("result").innerHTML = 'Result: ' + result;
    }
}


