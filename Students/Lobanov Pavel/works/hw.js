let catalog = {
    productList: [],
    setProductList: function (l) {
        this.productList = l.slice();
    }
};

let basket = {};

function create_product(name, cost, count) {
    return {
        name: name,
        cost: cost,
        count: count,
    };
}

function init_shop() {
    let productList = [];

    productList.push(create_product("носки", 10000, 2));
    productList.push(create_product("трусы", 11111, 3));
    productList.push(create_product("шорты", 22222, 10));

    catalog.setProductList(productList);

    console.log(productList);
}

function show_shop() {
    clear_all();

    init_shop();

    let shop_div = document.getElementById("shop");

    catalog.productList.forEach(function (product) {
        shop_div.innerHTML += `<div class='product'> \
                                    <p>Name: ${product.name}</p> \
                                    <br><p>Worth: ${product.cost}</p> \
                                    <br><p>Count: ${product.count}</p> \
                                </div>`;
    });

}

let comp_numbers = [];
let count = 10;
let is_user_win = false;

function bulls_and_cows_game() {
    clear_all();
    let bulls_and_cows_div = document.getElementById("bulls_and_cows");

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
    bulls_and_cows_div.innerHTML += "<p>Числа загаданы. Нажми, чтобы предложить вариант: </p><button onclick='set_nums()'>Предложить вариант</button>"
    count = 10;
    is_user_win = false;
}

function set_nums() {
    let bulls_and_cows_div = document.getElementById("bulls_and_cows");
    if (count == 0 || is_user_win) {
        bulls_and_cows_div.innerHTML += "<p>Игра окончена.</p>"
        return;
    }
    let user_str = prompt("Введите 4ре числа без повторений:");
    if (user_str.length != 4) {
        bulls_and_cows_div.innerHTML += "<p>Ошибка ввода: должно быть только 4ре числа. Повторим.</p>";
        return;
    }
    let user_numbers = [];
    for (let i = 0; i < user_str.length; ++i) {
        let new_n = Number(user_str[i]);
        if (Number.isNaN(new_n)) {
            bulls_and_cows_div.innerHTML += "<p>Ошибка ввода: должны быть только числа. Повторим.</p>";
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
            bulls_and_cows_div.innerHTML += "<p>Ошибка ввода: должны быть числа без повторений. Повторим.</p>";
            break;
        }
    }
    if (user_numbers.length != 4) {
        return;
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
    bulls_and_cows_div.innerHTML += `<p>Ваши числа - [${user_numbers}], Быков: ${bulls_cnt}, Коров: ${cows_cnt}</p>`;
    if (bulls_cnt == comp_numbers.length) {
        bulls_and_cows_div.innerHTML += "<p>Вы выиграли!</p>";
        is_user_win = true;
    } else {
        if (--count != 0){
            bulls_and_cows_div.innerHTML += `<p>Осталось попыток: ${count}</p>`;
        } else {
            bulls_and_cows_div.innerHTML += "<p>Вы проиграли!</p>";
        }
    }
}

function num_to_name(num) {
    switch (num) {
        case 1:
            return "камень";
        case 2:
            return "ножницы";
        case 3:
            return "бумага";
    }
}

function set_rps() {
    let winner = null;
    let user = +prompt("1 - камень \n2 - ножницы \n3 - бумага");
    let skynet = Math.floor(Math.random() * 3) + 1;

    let rock_paper_scissors_div = document.getElementById("rock_paper_scissors");
    rock_paper_scissors_div.innerHTML += `<p>Пользователь выбрал: ${num_to_name(user)}</p>`;
    rock_paper_scissors_div.innerHTML += `<p>Компьютер выбрал: ${num_to_name(skynet)}</p>`;

    if ((user == 1 && skynet == 2) || (user == 2 && skynet == 3) || (user == 3 && skynet == 1)) {
        winner = "Пользователь";
    } else if (user == skynet) {
        winner = "Ничья";
    } else {
        winner = "Компьютер";
    }

    rock_paper_scissors_div.innerHTML += `<p>Победитель: ${winner}</p>`;
}

function rock_paper_scissors_game() {
    clear_all();
    let rock_paper_scissors_div = document.getElementById("rock_paper_scissors");
    rock_paper_scissors_div.innerHTML += "<p>Чтобы выбрать камень, ножницы или бумагу нажмите: </p><button onclick='set_rps()'>Выбрать</button>"
}

function clear_all() {
    let shop_div = document.getElementById("shop");
    shop_div.innerHTML = "";

    let bulls_and_cows_div = document.getElementById("bulls_and_cows");
    bulls_and_cows_div.innerHTML = "";

    let rock_paper_scissors_div = document.getElementById("rock_paper_scissors");
    rock_paper_scissors_div.innerHTML = "";
}
