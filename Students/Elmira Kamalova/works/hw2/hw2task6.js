/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

function mathOperation(arg1, arg2, operation) {
	let a = null;
	switch (operation) {
		case "plus":
			a = arg1 + arg2;
			break;
		case "minus":
			a = arg1 - arg2;
			break;
		default:
			console.log("Неправильное число");
	}
	return a;
}

let x = +prompt("Введите первое число ");
let y = +prompt("Введите второе число ");

alert("Сумма чисел " + (mathOperation(x, y, "plus")));
alert("Разность чисел " + (mathOperation(x, y, "minus")));


