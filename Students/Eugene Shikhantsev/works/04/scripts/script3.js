// 3. Создать глобальный объект "Каталог" и разместить массив "товаров" (зад 2) внутри каталога.

var Catalog = {}

function getGoods(el, idx) {
    Catalog[idx] = el;
}

goodsArr.forEach(getGoods);

console.log(window.Catalog);
