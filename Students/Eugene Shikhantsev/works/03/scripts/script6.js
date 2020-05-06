// 6. Создать игру "Быки и коровы", используя доступные инструменты

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
computer = new Array();
for (let i = 1; i <= 4;){
    let newNum = Math.round(Math.random(9)*10);
    for (let idx = 0; idx <= computer.length; idx++) {
        if newNum == computer[idx] {

        }
        computer.push(newNum);
    }
    i++;
}