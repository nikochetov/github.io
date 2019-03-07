let num1 = document.getElementById('n1').value;
let num2 = document.getElementById('n2').value;

function noSymbol(input) {
    input.value = input.value.replace(/[^\d]/g, '');
};
function plus() {
	let res = +num1 + +num2;
	document.getElementById('result').value = res;
};
function minus() {
	let res = num1 - num2;	
	document.getElementById('result').value = res;
};
function multiply() {
	let res = num1 * num2;	
	document.getElementById('result').value = res;
};
function divide() {
	let res = num1 / num2;	
	document.getElementById('result').value = res;
};
