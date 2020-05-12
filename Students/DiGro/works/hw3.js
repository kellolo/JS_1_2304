const nextPrime = value => {
    if (value > 2) {
        let i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
};

function hw3_1() {
    let value, result = [];
    while (nextPrime(value) < 100) {
        value = nextPrime(value);
        result.push(value);
    }
    console.log("Primes:", result);
};

function hw3_4() {
    for (let count = 0; count <= 9; console.log(count++));
};

function hw3_5() {
    let arr = [];
    for (let count = 0; count < 20; count++) {
        arr[count] = 'x';
        console.log(arr);
    }
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getUniqueRandomNumber = (min, max, len) => {
    let numReserve = []
    while (numReserve.length < len) {
        let randomNumber = Math.ceil(Math.random() * max);
        let found = false;
        for (let i = min; i < numReserve.length; i++) {
            if (numReserve[i] === randomNumber) {
                found = true;
                break;
            }
        }
        if (!found) { numReserve[numReserve.length] = randomNumber; }
    }
    return numReserve
};
const isNumbers = (str) => parseInt(str, 10) == str;
const toArr = (str) => str.split('', 4);
const isUniq = (str) => new Set(toArr(str)).size === toArr(str).length;
const getCowOrBull = (userStr, compStr) => userStr.split('').map((num, idx) =>
    compStr.includes(num) ? compStr.indexOf(num) === idx ? 2 : 1 : 0);
const getAnimalCount = (result, num) => (result.filter(n => n === num)).length;
const getCowCount = (result) => getAnimalCount(result, 1);
const getBullCount = (result) => getAnimalCount(result, 2);

function hw3_6() {
    const maxTryCount = 10;
    const compStr = getUniqueRandomNumber(0, 9, 4).join('');
    //console.log('compStr:', compStr);
    let tryCount = 1;
    while (tryCount <= maxTryCount) {
        const userStr = prompt(`Попытка № ${tryCount}.\nВведите 4 значное число без повторяющихся чисел:`);
        if (isNumbers(userStr) && isUniq(userStr)) {
            const result = getCowOrBull(userStr, compStr);
            if (getBullCount(result) === 4) {
                console.log(`Вы выиграли c ${tryCount} попытки!`);
                break;
            } else {
                console.log(`Попытка: ${tryCount}\nЧисло пользователя: ${userStr}`);
                console.log(`Коров: ${getCowCount(result)} Быков: ${getBullCount(result)}`);
            }
        } else {
            console.log('Вы не выполнили условие!');
            break;
        }
        tryCount++;
    }

    if (tryCount > maxTryCount) {
        console.log(`Вы проиграли, так как использовали ${tryCount - 1} попыток!\nЧисло: ${compStr} `);
    }
};

