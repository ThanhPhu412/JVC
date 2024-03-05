let products = [
    {id: 1, name: 'Product1', price: 10000},
    {id: 2, name: 'Product2', price: 20000},
    {id: 3, name: 'Product3', price: 15000},
];
products.sort((a, b) => a.price - b.price);
console.log(products);
