var listProduct = [
    {name: 'product0.png'},
    {name: 'product1.png'},
    {name: 'product2.png'},
    {name: 'product3.png'},
    {name: 'product4.png'},
    {name: 'product5.png'},
    {name: 'product6.png'},
];

const listRouteProduct = [];
listProduct.forEach(element => {
    listRouteProduct.push({path: require('../resource/products/' + element.name)});
});

export default listRouteProduct;