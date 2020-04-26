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
        case 0: console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 1: console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 2: console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 3: console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 4: console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 5: console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 6: console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 7: console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
        case 8: console.log('8, 9, 10, 11, 12, 13, 14, 15');
        case 9: console.log('9, 10, 11, 12, 13, 14, 15');
        case 10: console.log('10, 11, 12, 13, 14, 15');
        case 11: console.log('11, 12, 13, 14, 15');
        case 12: console.log('12, 13, 14, 15');
        case 13: console.log('13, 14, 15');
        case 14: console.log('14, 15');
        case 15: console.log('15');
    }
}

function hw6() {
    let arg1 = +prompt('Введите первый аргумент: ');
    let arg2 = +prompt('Введите второй аргумент: ');
    let operation = prompt('Введите оператор (sum,diff,mult,div): ');
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'sum': res = sum(arg1, arg2); break;
            case 'diff': res = diff(arg1, arg2); break;
            case 'mult': res = mult(arg1, arg2); break;
            case 'div': res = div(arg1, arg2); break;
            default: res = alert('Неопознанный оператор');
        }
        return res
    }
    console.log('Результат: ' + mathOperation(arg1, arg2, operation));
}

function hw7() {
    console.log(null == 0);
    console.log(null === 0);
}

function hw8() {
    val = +prompt('Ведите число: ');
    pow = +prompt('Введите степень: ');
    function power(val, pow) {
        if (pow == 1) {
            return val;
        } else {
            return val * power(val, pow - 1);
        }
    }
    function isNumber(val) {
        // negative or positive
        return /^[-]?\d+$/.test(val);
    }
    let check1 = isNumber(val)
    let check2 = isNumber(pow)
    if (check1 && check2) {
        console.log(power(val, pow));
    } else {
        alert('Необходимо писать числа');
    }

}
