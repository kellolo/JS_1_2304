function task_1() {
    let userNum = +prompt("Введите число от 0 до 999");

    if (Number.isNaN(userNum) || userNum < 0 || userNum > 999) {
        console.log("Неверный ввод.");
        return
    }

    let str = String(userNum);
    let mas = [...str];
    let numObject = {
        сотни: 0,
        десятки: 0,
        единицы: 0,
    };

    if (mas.length == 3) {
        numObject.единицы = Number(mas[2]);
        numObject.десятки = Number(mas[1]); 
        numObject.сотни = Number(mas[0]);
    } else if (mas.length == 2) {
        numObject.единицы = Number(mas[1]);
        numObject.десятки = Number(mas[0]); 
    } else if (mas.length == 1) {
        numObject.единицы = Number(mas[0]);
    }

    console.log(numObject);

    return numObject;
}

let g_catalog = {
    productList: [],
    setProductList: function (l) {
        productList = l;
    }
};

let g_basket = {};

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

    g_catalog.setProductList(productList);

    console.log(productList);
}