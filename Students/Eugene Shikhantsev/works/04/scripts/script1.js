// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let endGame = false
let numObj = {}

function getNum() {
    let num = prompt('Enter 3x number: ');
    return (num);
}

// тут, наверное, надо проходить циклом, а не ифы-елзы плодить
// переделаю попозже

function numToObj(param) {
    if (param > 999) {
        console.log('Число превышает 999')
        return numObj;
    } else if (param < 100 && param > 9)  {
        numObj.units = param[1];
        numObj.decades = param[0];
        numObj.hundreeds = 0;
        return numObj;
    } else if (param < 10 && param >= 0)  {
        numObj.units = param[0];
        numObj.decades = 0;
        numObj.hundreeds = 0;
        return numObj;
    } else {
        numObj.units = param[2];
        numObj.decades = param[1];
        numObj.hundreeds = param[0];
        return numObj;
    }
}

// while (!endGame) {
    let newNum = getNum();
    numToObj(newNum);
    console.log(numObj);
    numObj = {};
// }