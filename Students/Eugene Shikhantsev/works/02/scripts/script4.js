// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

console.log('\n#4')
function getIntRandRange(n, max_int) {
    switch(n){
        case 1: console.log(n++);
        case 2: console.log(n++);
        case 3: console.log(n++);
        case 4: console.log(n++);
        case 5: console.log(n++);
        case 6: console.log(n++);
        case 7: console.log(n++);
        case 8: console.log(n++);
        case 9: console.log(n++);
        case 10: console.log(n++);
        case 11: console.log(n++);
        case 12: console.log(n++);
        case 13: console.log(n++);
        case 14: console.log(n++);
        case 15: console.log(n++);

    }
}
let n = Math.round(Math.random(100) * 15)
let max_int = 15
getIntRandRange(n, max_int)
