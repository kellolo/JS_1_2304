// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих 
// свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let num = prompt('Задание №1\nВведите число от 0 - 999');

    function numToObject(num) {
        let arr = [...num];
        if (arr.length > 3) {
            console.log("Число больше 999!");
            return new Object

        }
         while (arr.length !== 3) {
             arr.unshift(0);
        }

        return {
            "Сотни": +arr[0],
            "Десяткиh": +arr[1],
            "Единицы": +arr[2]
        }
    };

console.log("Задание №1\n", numToObject(num))

// Создать массив объектов товаров нашего будущего магазина (в объекте есть поля: название, стоимость)

let names = ['Процессор INTEL Core i5 9600K, OEM', 'Материнская плата GIGABYTE B450M S2H', 'Модуль памяти CRUCIAL CT8G4DFS8266 DDR4 — 8Гб',
              'Видеокарта GIGABYTE nVidia GeForce GTX 1660 , GV-N1660OC-6GD', 'Блок питания AEROCOOL VX PLUS 500W, черный'];
        let prices = [18590, 4850, 2790, 18290, 2370];
        let ids = [1, 2, 3, 4, 5];

let createItem = index => ({
    product_name: names[index],
    price: prices[index],
    id_product: ids[index]
});

// Создать глобальный объект "Каталог" и разместить массив "товаров" (зад 2) внутри каталога.

let catalog = {
    items: [],
}

let fillCatalog = () => {
    ids.forEach((el, index) => {
        catalog.items.push(createItem(index));
    });
};

fillCatalog();

console.log("Задание №3\n", catalog)

// Создать глобальный объект "Корзина"

let basket = {
    items: []
}