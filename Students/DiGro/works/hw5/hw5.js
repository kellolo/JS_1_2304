let names = ['Pos1', 'Pos2', 'Pos3', 'Pos4', 'Pos5'];
let prices = [10, 30, 20, 50, 40];
let ids = [1, 2, 3, 4, 5];
let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',
    'http://placehold.it/200x150', 'http://placehold.it/200x150'];

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
        this._render();
        this._initHandlers();
    },

    _initHandlers() {
        document.querySelectorAll('.buy-btn').forEach(node => node.addEventListener('click', this._buyItem.bind(this)));
    },

    _buyItem(e) {
        e.preventDefault();
        basket.add(this._getItemByID(e.target.dataset.id));
    },

    _getItemByID(id) {
        return this.items.find(item => item.id_product == id);
    },

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="Картинка">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} &#8381</p>
                            <button class="buy-btn" name="buy" data-id="${item.id_product}">Купить</button>
                        </div>
                    </div>`
        });
        document.querySelector(this.container).innerHTML = htmlStr;
    }
}

let basket = {
    items: [],
    container: '.basket-block',

    init() {
        this._initHandlers();
    },

    add(item) {
        const existItem = this._getItemByID(item.id_product);
        if (existItem) {
            existItem.amount = existItem.amount + 1;
        } else {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        }
        this._render();
    },

    _getItemByID(id) {
        return this.items.find(item => item.id_product == id);
    },

    _initHandlers() {
        this._getButton().addEventListener('click', this._toggleBasket.bind(this));
        this._getContainer().addEventListener('click', this._handleGlobalClick.bind(this));
    },

    _handleGlobalClick(e) {
        e.preventDefault();
        if (e.target.name === 'clear') {
            this.items = [];
        }
        this._render();
    },

    _toggleBasket(e) {
        e.preventDefault();
        this._getContainer().classList.toggle('hidden')
    },

    _getButton() {
        return document.querySelector('.btn-basket');
    },

    _getContainer() {
        return document.querySelector(this.container);
    },

    _getTotalPrice() {
        return this.items.reduce((sum, item) => sum += item.price, 0);
    },

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="basket-item">  <img src="${item.img}" alt="">
                            <div class="product-desc">
                                <p class="product-title">${item.product_name}</p>
                                <p class="product-amount">${item.amount}</p>
                                <p class="product-single-price">${item.price}</p>
                            </div>
                        </div>`
        });
        htmlStr += `<div class="right-block">
            <p class="product-price">Итого: ${this._getTotalPrice()}</p>
            <button class="del-btn" name="clear">Очистить корзину</button>
        </div>`;
        document.querySelector(this.container).innerHTML = htmlStr;
    }
}

catalog.init();
basket.init();