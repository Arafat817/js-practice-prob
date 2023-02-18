const shoppingChart = [
    { name: 'shirt', price: 1000, quantity: 2},
    { name: 'pant', price: 1500, quantity: 1},
    { name: 'shoes', price: 2400, quantity: 2},
    { name: 'belt', price: 600, quantity: 3},
];

function totalCost (products){
    let sum =0;
    for (let i=0;i<products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum+ productTotal;

    }
    return sum;
}
const expence= totalCost(shoppingChart);
console.log(expence);