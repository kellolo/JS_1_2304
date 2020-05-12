function hw3_1() {
    let i = 2;
    let primes = [];
    while (i <= 100) {
        let found = false;
        let del = 2;
        while (del <= i/2) {
            if (i%del == 0) {
                found = true;
                break;
            }
            ++del;
        }
        if (found == false) {
            primes.push(i);
        }
        ++i;
    }

    console.log("Простые числа:", primes);
}

function hw3_4() {
    for (i = 0; i <=9; console.log(i++)) {}
}

function hw3_5() {
    let str = '';
    for (i=0; i < 20; ++i) {
        str += 'x';
        console.log(str);
    }
}

function game() {
    let comp_numbers = [];
    for (let i = 0; i < 4; ++i) {
        let is_new = false;
        let new_n = 0;
        while (!is_new) {
            new_n = Math.round(Math.random()*9);
            is_new = true;
            for (let j = 0; j < i; ++j) {
                if (comp_numbers[j] == new_n) {
                    is_new = false;
                    break;
                }
            }
        }
        comp_numbers[i] = new_n;
    }

    let count = 10;
    let is_user_win = false;
    while (count > 0 && !is_user_win) {
        let user_str = prompt("Введите 4ре числа без повторений:");
        if (user_str.length != 4) {
            console.log("Ошибка ввода: должно быть только 4ре числа. Повторим.");
            continue;
        }
        let user_numbers = [];
        for (let i = 0; i < user_str.length; ++i) {
            let new_n = Number(user_str[i]);
            if (Number.isNaN(new_n)) {
                console.log("Ошибка ввода: должны быть только числа. Повторим.");
                break;
            }
            
            let is_good = true;
            for (let j = 0; j < i; ++j) {
                if (new_n == user_numbers[j]) {
                    is_good = false;
                    break;
                }
            }
            if (is_good) {
                user_numbers[i] = new_n;
            } else {
                console.log("Ошибка ввода: должны быть числа без повторений. Повторим.");
                break;
            }
        }
        if (user_numbers.length != 4) {
            continue;
        }

        let bulls_cnt = 0;
        let cows_cnt = 0;

        for (let i = 0; i < user_numbers.length; ++i) {
            if (user_numbers[i] == comp_numbers[i]) {
                ++bulls_cnt;
                continue;
            }

            for (let j = 0; j < comp_numbers.length; ++j) {
                if (j != i && comp_numbers[j] == user_numbers[i]) {
                    ++cows_cnt;
                    break;
                }
            }
        }
        console.log("Bulls:", bulls_cnt, "Cows:", cows_cnt);
        if (bulls_cnt == comp_numbers.length) {
            console.log("Вы выиграли!");
            is_user_win = true;
        } else {
            if (--count != 0){
                console.log("Осталось попыток:", count);
            } else {
                console.log("Вы проиграли!");
            }
        }
    } 
}