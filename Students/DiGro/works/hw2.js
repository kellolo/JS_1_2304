// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел 
// от a до 15.
// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать 
// оператор return.
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения 
//аргументов, operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из 
// арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(использовать switch).
// 7. *Сравнить null и 0. Попробуйте объяснить результат.
// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – 
// заданное число, pow – степень.

// work 1
// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.
function hw1() {
    let Tc = prompt('Введите температуру в цельсиях: ');
    let Tf = ((9 / 5) * Tc + 32);
    console.log('Температура: ' + Tf + 'F');
}

// work 2
// Объявить две переменные: admin и name. Записать в name строку "Василий"
// Скопировать значение из name в admin. Вывести admin (должно вывестись «Василий»)
function hw2() {
    let admin;
    let name;
    name = "Василий";
    admin = name;
    console.log(admin);
}

function hw3() {
    let a = Math.floor(Math.random() * (100 - (-100) + 1) - 100)
    let b = Math.floor(Math.random() * (100 - (-100) + 1) - 100)
    console.log(a, b)

    if (a >= 0 && b >= 0) {
        console.log('Разность: ' + (a - b));
    } else if (a < 0 && b < 0) {
        console.log('Произведение: ' + (a * b));
    } else {
        console.log('Сумма: ' + (a + b));
    }
}

function hw4() {
    let a = Math.floor(Math.random() * 15)
    switch (a) {
        case 0: console.log(a++);
        case 1: console.log(a++);
        case 2: console.log(a++);
        case 3: console.log(a++);
        case 4: console.log(a++);
        case 5: console.log(a++);
        case 6: console.log(a++);
        case 7: console.log(a++);
        case 8: console.log(a++);
        case 9: console.log(a++);
        case 10: console.log(a++);
        case 11: console.log(a++);
        case 12: console.log(a++);
        case 13: console.log(a++);
        case 14: console.log(a++);
        case 15: console.log(a++);
    }
}

// hw5
function sum(a, b) {
    let res = (a + b)
    return res;
}

function diff(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum': return sum(arg1, arg2); break;
        case 'diff': return diff(arg1, arg2); break;
        case 'mult': return mult(arg1, arg2); break;
        case 'div': return div(arg1, arg2); break;
        default: return alert('Неопознанный оператор');
    }
}

function hw6() {
    let arg1 = +prompt('Введите первый аргумент: ');
    let arg2 = +prompt('Введите второй аргумент: ');
    let operation = prompt('Введите оператор (sum,diff,mult,div): ');

    console.log('Результат: ' + mathOperation(arg1, arg2, operation));
}

function hw7() {
    console.log(null == 0);
    console.log(null === 0);
}

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else if (pow > 1) {
        return val * power(val, pow - 1);
    } else if (pow == 0) {
        return 1;
    }
}
function hw8() {
    val = +prompt('Ведите число: ');
    pow = +prompt('Введите степень: ');

    if (isNaN(val * pow)) {
        alert('Необходимо писать числа');
    } else {
        console.log(power(val, pow));
    }
}
