// Создать верстку каталога из прошлого урока

let names = ['Процессор INTEL Core i5 9600K, OEM', 'Материнская плата GIGABYTE B450M S2H', 'Модуль памяти CRUCIAL DDR4 — 8Гб',
              'Видеокарта GIGABYTE nVidia GeForce GTX 1660', 'Блок питания AEROCOOL VX PLUS 500W'];
let prices = [18590, 4850, 2790, 18290, 2370];
let ids = [1, 2, 3, 4, 5];
let imgs = ['https://en.wikichip.org/w/images/1/11/8th_gen_core_i7_logo.png', 'https://i0.wp.com/ae01.alicdn.com/kf/He918732d3ed8451d9ef746bb8761ab7dA/-font-b-GIGABYTE-b-font-GA-B85M-D3V-Plus-placa-base-B85-Socket-LGA-1150.jpg', 
            'https://i3.wp.com/ae01.alicdn.com/kf/U478dde600d11406eba9692cbcbf04b4cK/Memoria-RAM-font-b-Crucial-b-font-Single-Rank-CT51264BD160BJ-4-GB-1600-MHz-DDR3L-PC3.jpg_350x350.jpg', 
            'https://novomichurinsk.nix.ru/images/GIGABYTE-GV-N206SWF2-8GD-43596215675.jpg?good_id=435962&width=500&height=500&view_id=15675', 
            'https://dnr-market.ru/ssl/u/pic/5a/dbe4a4248511eab6d6f03a126e4d4e/-/8%D0%B0.webp'];

let createItem = index => ({
    product_name: names[index],
    price: prices[index],
    id_product: ids[index],
    img: imgs[index]
});

let fillCatalog = () => {
    ids.forEach((el, index) => {
        catalog.items.push(createItem(index));
    });
};


let catalog = {
    items: [],
    container: '.catalog-items',

    init() {
        fillCatalog();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach (item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="тут должна быть картинка">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} &#8381</p>
                            <button class="buy-btn">Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;      
    }
}

let basket = {
    items: [],
}

catalog.init();