import {product, name, seller, price, add} from "./products.js";
console.log(product);
console.log(name);
console.log(seller);
console.log(price);
add(10,30); // pass parameter in add() function
/*
We can't declare any variable named products, name, seller, price in this page. But you can import in another way. Please follow the steps bellow
*/

import {product as allProduct, name as buyerName, seller as sellerName, price as productsPrice, add as sum} from "./products.js";
console.log(allProduct);
console.log(buyerName);
console.log(sellerName);
console.log(productsPrice);
sum(20,40);
