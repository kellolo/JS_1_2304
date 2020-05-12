// 7. *Сравнить null и 0. Попробуйте объяснить результат.


console.log('\n#7');
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log('Математически это можно представить, что null преобразовывается к +0 (бесконечно малое положительное число. lim(null) -> 0)');
