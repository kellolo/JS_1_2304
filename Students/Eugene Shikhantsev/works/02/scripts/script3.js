// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

console.log("\n#3")
let var1 = Math.round( ((Math.random() < 0.5) ? -1 : 1) * Math.random(100) * 100);
let var2 = Math.round( ((Math.random() < 0.5) ? -1 : 1) * Math.random(100) * 100);

console.log("var1 = " + var1);
console.log("var2 = " + var2);

function getSomeRes(x,y) {
    if (var1 > 0 && var2 > 0) {2;
        res = var1 - var2;
        console.log("var1 - var2 = " + res);
    } else if (var1 < 0 && var2 < 0) {
        res = var1 * var2;
        console.log("var1 * var2 = " + res);
    } else if ((var1 < 0 && var2 >= 0) || (var1 >= 0 && var2 < 0)) {
        res = var1 + var2;
        console.log("var1 + var2 = " + res);
    }
}

getSomeRes(var1, var2);
