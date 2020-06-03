// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// let container = '.print'
// let print = '';
// for (let i = 0; i <= 10; i++) {
//     print += `<p>${i}<\p>`;
// }

// document.querySelector(container).innerHTML = print;

let names   = ["iMac", "iPhone", "Watch", "Macbook", "iMac", "iPhone", "Watch", "Macbook"];
let quantity = [20, 45, 190, 12, 20, 45, 190, 12]
let prices  = [3000, 2000, 1500, 4500, 3000, 2000, 1500, 4500];
let images  = ["./images/imac.jpg", "./images/iphone.jpg", "./images/iwatch.jpg", "./images/macbook.jpg", "./images/imac.jpg", "./images/iphone.jpg", "./images/iwatch.jpg", "./images/macbook.jpg"];
let desc    = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
]
let ids     = [0, 1, 2, 3, 4, 5, 6, 7];

let createItem = (index) => ({
    product_name:       names[index],
    product_price:      prices[index],
    product_img:        images[index],
    product_desc:       desc[index],
    id_product:         ids[index],
    product_quanttity:  quantity[index],
}); 

let fillCatalog = () => {
    ids.forEach((el, index) =>
        catalog.items.push(createItem(index))
    )
};

let catalog = {
    items: [],
    container: '.catalog-items',
    init() {
        fillCatalog();
        this.render();
    },
    render() {
        let htmlStr = "";
        
        this.items.forEach (item => {
            htmlStr += `<div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 card">
                            <img class="card-img-top" alt="imac" src= "${item.product_img}" >
                            <div class="card-body">
                                <h5 class="card-title">${item.product_name}</h5>
                                <p class="card-text">${item.product_desc}</p>
                                <button class="btn btn-primary"> ${item.product_price} $.USD</button>
                            </div>
                        </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;
    },
};

catalog.init()

let basket = {
    items: [],
}
