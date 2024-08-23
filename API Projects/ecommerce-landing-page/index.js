// Three method of call API

// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// .then(response => console.log(response))

import productCard from "./productCard.js";


async function loadApi() { // Recommended method
    const response= await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    let productCode = '';

for (let value of data) {
    productCode += (productCard(value));
}

document.getElementById("root").innerHTML = productCode;
}

// Using array function 
/*
const loadApi = async() => {
    const response= await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    console.log(data);
}
*/

loadApi();