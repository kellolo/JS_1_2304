// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

console.log('\n#8');
function power(val, pow) {
    if (pow === 1) return val;
    return val * power(val, pow - 1);

    // return pow?val*power(val, pow-1) : 1;
}

console.log(power(2, 10));