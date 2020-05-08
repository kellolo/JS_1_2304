// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

console.log('\n5. *Нарисовать пирамиду с помощью console.log');
let rows =20;
for (let idx = 1; idx <= rows; idx++) {
    let starLine = '';
    for (let i = 1; i <= idx; i++) {
        starLine += '*';
    }
    console.log(starLine);
}
