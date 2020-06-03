let names = ['Pos1', 'Pos2', 'Pos3', 'Pos4', 'Pos5'];
let prices = [10, 30, 20, 50, 40];
let ids = [1, 2, 3, 4, 5];
let imgs = ['https://1.jpg', 'https://2.jpg', 'https://3.jpg', 'https://4.jpg', 'https://5.jpg'];

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
        this.items.forEach(item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="тут  картинка">
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