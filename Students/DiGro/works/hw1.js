function game() {
    let winner = null;
    let rock = 'камень';
    let scissors = 'ножницы';
    let paper = 'бумага';
    let user = +prompt('1 - ' + rock + '\n2 - ' + scissors + '\n3 - ' + paper);

    let skynet = Math.floor(Math.random() * 3) + 1;

    if ((user == 1 && skynet == 2) || (user == 2 && skynet == 3) || (user == 3 && skynet == 1)) {
        winner = 'пользователь';
    } else if (user === skynet) {
        winner = 'ничья';
    } else {
        winner = 'компьютер';
    }
    function choise(arg) {
        switch (arg) {
            case 1: res = rock; break;
            case 2: res = scissors; break;
            case 3: res = paper; break;
        } return res
    }
    console.log('Победитель: ' + winner + '\nПользователь выбрал: ' + choise(user) + '\nКомпьютер выбрал: ' + choise(skynet));
}