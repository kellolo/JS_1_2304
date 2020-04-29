function choise(arg) {
    let rock = 'камень';
    let scissors = 'ножницы';
    let paper = 'бумага';

    switch (arg) {
        case 1: return rock; break;
        case 2: return scissors; break;
        case 3: return paper; break;
    }
}
function game() {
    let winner = null;
    let user = +prompt('1 - ' + choise(1) + '\n2 - ' + choise(2) + '\n3 - ' + choise(3));
    let skynet = Math.floor(Math.random() * 3) + 1;

    if ((user == 1 && skynet == 2) || (user == 2 && skynet == 3) || (user == 3 && skynet == 1)) {
        winner = 'пользователь';
    } else if (user === skynet) {
        winner = 'ничья';
    } else {
        winner = 'компьютер';
    }

    console.log('Победитель: ' + winner + '\nПользователь выбрал: ' + choise(user) + '\nКомпьютер выбрал: ' + choise(skynet));
}