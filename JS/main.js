//ПЕРЕМЕННЫЕ

// var message = "Hello, World!";
// var myNumber = 9.568;
// var myString = 'Hello, World!';
// var myBoolean = false;
// var myNull = null;
// var myUndefined = undefined;
// var myObject = {
// 	name: 'Vasya',
// 	age: 30
// };


// ЧИСЛА 

// console.log(myNumber - 88);
// console.log(myNumber + 88);
// console.log(myNumber * 88);
// console.log(myNumber / 88);
// myNumber++; // Прибавить 1
// console.log(myNumber);
// console.log(Math.round(myNumber)); //Мат. округление
// console.log(Math.ceil(myNumber));  //Округление в большую сторону
// console.log(Math.floor(myNumber));  //Округление в меньшую сторону
// var newNumber = 45.326;
// console.log(newNumber.toFixed(2));  //Количество цифр после точки с округлением


// СТРОКИ

// console.log(myNumber + myString);
// console.log(40 + myNumber);
// console.log('40' + myNumber);
// console.log(message + ' How Are You?');
// console.log(message.toLowerCase()); //Нижний регистр
// console.log(message.toUpperCase()); //Все заглавные


// МАССИВЫ

// var names = ["Илья", "Лена", "Коля"]; //Массив с тремя индексами, начиная с 0
// console.log(names[2].toUpperCase());  //Вывод третьего индекса
// names.push("Ярослав");  //Добавление в массив (индекс 3)
// console.log(names[3]);
// console.log(names);  // Посмотреть весь массив


//УСЛОВИЯ

// if (15 > 10) {
// 	console.log('Условие выполнилось');
// }
// if ('Коля' != 'Лена') {
// 	console.log('Условие выполнилось');
// }
// if ('Коля' != 'Лена' && myNumber > 10) {  // если 1 условие И 2 условие true
// 	console.log('Условие выполнилось');
// }
// if ('Коля' != 'Лена' || myNumber > 10) {  // если 1 условие ИЛИ 2 условие true
// 	console.log('Условие выполнилось');
// }

// if (myNumber < 5) {
// 	console.log('Число меньше 5');
// } else {
// 	console.log('Число больше 5');
// }


//ЦИКЛЫ

// for (var i = 0; i < 10; i++) { // значение равно 0б, меньше 10 (true or false), если true - вывод в консоль с прибавлением к значению 1 (i++)
// 	console.log(i);
// }

// for (var i = 0; i < 10; i++) { // остановка на значении 4
// 	if (i == 4) {
// 		break;
// 	}
// 	console.log(i);
// }

// for (var i = 0; i < 10; i++) { // в данном случае пропускается 4
// 	if (i == 4) {
// 		continue;
// 	}
// 	console.log(i);
// }

// for (var j = 0; j < names.length; j++) {
// 	console.log(names[j]);
// }

// var i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }


// ФУНКЦИИ

// function test() {						// Назначение имени функции
// 	console.log('Какой-то результат');
// }
// test();									// Вызов функции

// function sum(x, y) {
// 	console.log(x + y);
// }
// sum(25, 37);

// function sum(x, y) {
// 	return x + y;
// }
// console.log(sum(125, 65));


//ОБЪЕКТЫ

// var myObject = {
// 	name: 'Vasya',
// 	age: 30,
// 	surname: 'Pupkin',
// 	getFullName: function() {
// 		return this.name + ' ' + this.surname;
// 	}
// };
// console.log(myObject.name);
// console.log(myObject.getFullName());


// ПРАКТИКА

// function f1(){
// 	var number = document.getElementById('btn').value;
// 	alert(number * number);
// }

function noSymbol(input) {
    input.value = input.value.replace(/[^\d]/g, '');
};
function plus() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 + num2;	
	document.getElementById('result').value = res;
}function minus() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 - num2;	
	document.getElementById('result').value = res;
}function multiply() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 * num2;	
	document.getElementById('result').value = res;
}function divide() {
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var res = num1 / num2;	
	document.getElementById('result').value = res;
}

