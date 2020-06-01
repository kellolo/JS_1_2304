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
                            <button class="buy-btn" data-name="${item.product_name}" data-price="${item.price}" data-id="${item.id_product}">Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;      
    }
}

let buyBtns = document.querySelectorAll('buy-btn');
buyBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        basket.addItem({id: id, price: price, name: name})
    })
});

let basket = {
    items: {},

    addItem(item) {
        this.addItemToObject(item);
        this.renderItemInBasket(item);
    },

    addItemToObject(item) {
        this.items[item.id] = {
            price: item.price,
            name: item.name
        }
    },

    renderItemInBasket(item) {
        let itemRow = `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <button class="del-btn">&times;</button>
            </tr>
        `;
        let prodDesc = document.querySelector('product-desc');
        prodDesc.insertAdjacentHTML("beforeend", itemRow);
    }

};


catalog.init();