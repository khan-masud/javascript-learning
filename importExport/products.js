const product = ['Mobile', 'PC', 'Laptop', 'Mouse', 'Keyboard'];
const name = 'Abdullah Al Masud';
const seller = 'Khan Groups';
const price = {
    'Mobile': 10000,
    'PC': 50000,
    'Laptop': 80000,
    'Mouse': 500,
    'Keyboard': 1000
};

function add(a,b) {
    console.log(a + b);
}

export {
    product, 
    name, 
    seller, 
    price,
    add
};