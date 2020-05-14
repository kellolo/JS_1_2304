// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let game = false
let numObj = {}

function getNum() {
    let num = prompt('Enter 3x number: ');
    return (num);
}

function numToObj(param) {
    if (param > 999) {
        return numObj;
    } else {
        numObj.units = param[2];
        numObj.decades = param[1];
        numObj.hundreeds = param[0];
        return numObj;
    }
}

while (!game) {
    let newNum = getNum();
    numToObj(newNum);
    console.log(numObj);
    numObj = {};
}