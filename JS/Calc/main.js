


function noSymbol(input) {
    input.value = input.value.replace(/[^\d]/g, '');
};
function plus() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = +num1 + +num2;
	document.getElementById('result').value = res;
};
function minus() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 - num2;	
	document.getElementById('result').value = res;
};
function multiply() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 * num2;	
	document.getElementById('result').value = res;
};
function divide() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 / num2;	
	document.getElementById('result').value = res;
};
