let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
let prices = [100, 120, 130, 50, 150];
let ids = [1, 2, 3, 4, 5];
let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]

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

let buyButtonClick = (evt) => {
    if (evt.target.name == 'buy-btn') {
        let itemCatalogIndex = Number(evt.target.dataset.name);
        basket.addProduct(catalog.items[itemCatalogIndex]);
    }
};

let catalog = {
    items: [],
    container: '.catalog-items',

    init() {
        fillCatalog();
        this.render();
        document.querySelector(this.container).addEventListener('click', buyButtonClick); 
    },
    render() {
        let htmlStr = '';
        this.items.forEach ((item, index) => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} $</p>
                            <button class="buy-btn" name="buy-btn" data-name=${index}>Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;     
    },
}


let delButtonClick = (evt) => {
    if (evt.target.name == 'del-btn') {
        let itemIndex = Number(evt.target.dataset.name);
        --basket.items[itemIndex].count;
        basket.totalPrice -= basket.items[itemIndex].price;
        --basket.totalCount;

        if (basket.items[itemIndex].count == 0) {
            basket.items.splice(itemIndex, 1);
        }
        let htmlStr = '';
        basket.items.forEach((item, index) => {
            htmlStr += basket.renderItem(item, index);
        });

        document.querySelector(basket.container).innerHTML = htmlStr;
        basket.renderTotal();
    }
};

let basket = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
    container: '.basket-items',

    init() {
        this.renderTotal();
        document.querySelector(this.container).addEventListener('click', delButtonClick);
    },

    renderItem(item, index) {
        return `<div class="basket-item">
                        <img src="http://placehold.it/100x80" alt="">
                        <div class="product-desc">
                            <p class="product-title">${item.product_name}</p>
                            <p class="product-amount">${item.count}</p>
                            <p class="product-single-price">${item.price}</p>
                        </div>
                        <div class="right-block">
                            <p class="product-price">${item.count*item.price}</p>
                            <button class="del-btn" name="del-btn" data-name="${index}">&times;</button>
                        </div>
                    </div>`;
    },

    renderTotal() {
        let htmlStr = "Корзина пуста";
        if (this.totalCount != 0) {
            htmlStr = ` <p class="basket-total-price">Общая цена: ${this.totalPrice}</p>
                            <p class="basket-total-count">Общее количество: ${this.totalCount}</p>`;
        }
        document.querySelector('.basket-total').innerHTML  = htmlStr;
    },

    addProduct(product) {
        let htmlStr = '';
        let found = false;

        this.items.forEach((item, index) => {
            if (item.id_product == product.id_product) {
                item.count += 1;
                ++this.totalCount;
                this.totalPrice += product.price;
                found = true;
            }
            
            htmlStr += this.renderItem(item, index);
        });

        if (!found) {
            this.items.push( {
                product_name: product.product_name,
                id_product: product.id_product,
                price: product.price,
                count: 1,
            });
            htmlStr += this.renderItem(this.items[this.items.length - 1], this.items.length - 1);
            ++this.totalCount;
            this.totalPrice += product.price;
        }

        document.querySelector(this.container).innerHTML = htmlStr;
        this.renderTotal();
    }
}

function basketButtonClick() {
    let basketBlock = document.querySelector(".basket-block");
    if (basketBlock.style.cssText == "display: none;") {
        basketBlock.style.cssText = "display: block";
    } else {
        basketBlock.style.cssText = "display: none";
    }
}

catalog.init();
basket.init();
