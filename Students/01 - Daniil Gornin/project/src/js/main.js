let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
let prices = [100, 120, 130, 50, 150];
let ids = [1, 2, 3, 4, 5];
let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]
let basket_sum = 0;

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
                        <img src="${item.img}" alt="">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} $</p>
                            <button class="buy-btn" name="${item.id_product}">Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;      
    }
}

let basket = {
    items: [],
}

let container = document.querySelector('.catalog-items');
container.addEventListener('click', BuyButtonFunction);

function BuyButtonFunction(evt) {
    if (evt.target.className === 'buy-btn'){
        let lastBasketItem = createItem(evt.target.name - 1);
        basket.items.unshift(lastBasketItem);
        document.querySelector('.basket-items').innerHTML += `
            <div class="basket-item">
                <img src="${lastBasketItem.img}" alt="">
                <div class="product-desc">
                    <p class="product-title">${lastBasketItem.product_name}</p>
                    <p class="product-amount">${lastBasketItem.price}</p>
                </div>
            </div>
        `
        basket.items.forEach(item => {
            basket_sum += item.price;
        });
        document.querySelector('#all_price').innerHTML = basket_sum;
    }
}

catalog.init();
