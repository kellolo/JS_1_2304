// Задание 1
// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью
// console.log и вернуть пустой объект.

function hw4_1() {
    let inputNumber = prompt('Input number in 0-999');
    console.log(numberToObj(inputNumber));
}

function numberToObj(inputNumber) {
    let arr = [...inputNumber];

    if (arr.length < 4) {
        while (arr.length !== 3) {
            arr.unshift(0);
        }

    } else {
        console.log('Wrong input');
        arr = [0, 0, 0];
    }

    return {
        hundreds: +arr[0],
        dozens: +arr[1],
        units: +arr[2]
    }
}

// Создать массив объектов товаров нашего будущего магазина(в объекте есть поля: название, стоимость).
// Создать глобальный объект "Каталог" и разместить массив "товаров"(зад 2) внутри каталога.
// Создать глобальный объект "Корзина".

function hw4_2() {

    let objs = ['Pos_1', 'Pos_2', 'Pos_3'];
    let prices = [10, 20, 30];
    let ids = [1, 2, 3];

    let catalog = {
        items: [],
    }

    let basket = {
        items: []
    }

    let createItem = index => ({
        product_name: objs[index],
        price: prices[index],
        id_product: ids[index]
    });

    let fillCatalog = () => {
        ids.forEach((el, index) => {
            catalog.items.push(createItem(index));
        });
    };

    fillCatalog();

    console.log(catalog);
}