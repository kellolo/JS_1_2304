// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

console.log('\n#5')
function Add(arg1, arg2){
    return arg1 + arg2;
}

function Sub(arg1, arg2){
    return arg1 - arg2;
}

function Mult(arg1, arg2){
    return arg1 * arg2;
}

function Div(arg1, arg2){
    if (arg2 == 0) return 'PANIC! Zero Divizion';
    return arg1 / arg2;
}

console.log('add: ' + Add(5, 6))
console.log('sub: ' + Sub(5, 6))
console.log('mult: ' + Mult(5, 6))
console.log('div: ' + Div(5, 0))
