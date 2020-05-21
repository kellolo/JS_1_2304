// 6. Создать игру "Быки и коровы", используя доступные инструменты

console.log("Отгадайте 4х значное число. Игра Быки и Коровы. Числа от 1 до 9, не повторяются");

let user_num = 0;
let game_over = false;
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let guess_nums  = [];
let max_nums = 4;
let tryes = 0;
let maxTryes = 10;

for (let i = 0; i < max_nums; i++) {
    let guess_num = Math.floor(Math.random()*nums.length);
    guess_nums.push(nums[guess_num]);
    nums.splice(guess_num, 1)
}
// console.log(guess_nums);

while (!game_over) {
    let cows = 0;
    let bulls = 0;
    user_num = prompt("Введите 4х значное число (цифры от 1 до 9)");
    tryes++;
    console.log("tryes: " + tryes);
    console.log("Вы ввели: " + user_num);

    if (isNaN(user_num)) {
        console.log("Не число");
        continue;
    } else if ((user_num.length > 4) || (user_num.length < 4)) {
        console.log("Не 4х значное");
        continue;
    } else {
        for (let i = 0; i < max_nums - 1; i++) {
            for (let j = i + 1; j < max_nums; j++) {
                if (user_num[i] == user_num[j]) {
                    console.log("Числа не должны повторяться!!!");
                }
            }
        }
    }

    for (let i = 0; i < max_nums; i++) {
        for (let j = 0; j < max_nums; j++) {
            if (user_num[i] == guess_nums[j]) {
                cows++;
            }
        }
        if (user_num[i] == guess_nums[i]) {
            bulls++;
        }
    }
    
    console.log("bulls: " + bulls);
    console.log("cows: " + cows);

    if (tryes == maxTryes) {
        console.log("Game Over!! Вы исчерпали все 10 попыток!");
        game_over = true;
    }
    if (bulls == max_nums || cows == max_nums) {
        console.log("Game Over!! Вы победили!!");
        game_over = true;
    }
}