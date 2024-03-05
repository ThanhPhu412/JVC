let product = {
    id: 1,
    name: 'Lexnguyen',
    price: 10000,
    quantity: 5
};
for (let property in product) {
    console.log(property + ": " + product[property]);
}
