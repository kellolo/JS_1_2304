// Создать массив объектов товаров нашего будущего магазина (в объекте есть поля: название, стоимость)

goodsArr = [];

function getElems(el, idx, arr) {
    let newObj = {};
    newObj.name = arr[idx];
    newObj.price = goodsPrice[idx];
    goodsArr.push(newObj);
}

let goodsNames = ['iPhone', 'iPad', 'iMac', 'iSomeElse'];
let goodsPrice = [300, 200, 2000, 532];

goodsNames.forEach(getElems);

console.log(goodsArr);