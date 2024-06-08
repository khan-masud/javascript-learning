/*
    We can handle json in 2 ways.
        1. Creating local json with array and object
        2. Using external json file by fetching
    Lets Try With Two ways...    
*/

// We are creating local

const products = [
    {
        id : 1,
        name : "Product 1",
        price : 100,
        description : "This is product 1",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 2,
        name : "Product 2",
        price : 200,
        description : "This is product 2",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 3,
        name : "Product 3",
        price : 300,
        description : "This is product 3",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 4,
        name : "Product 4",
        price : 400,
        description : "This is product 4",
        image : "https://picsum.photos/200/300"
    }
]

const localProductJson = JSON.stringify(products); // Converted the products array into a JSON
const localProductArray = JSON.parse(localProductJson); // Converted the JSON file into array again.

fetch('products.json') // Connected the json file
.then(response => response.json()) // Get response
.then(data => {
    console.log(data); // Converted the json file into an array. No need to console log, this only for testing purpose.

    showProductCard(data); // Function call for product card showing
                            // Reminder : We are working with the external json file not local
});

function showProductCard(info) {
    const root = document.getElementById('root'); // Target the root id in HTML file
    info.forEach(product => { // Run a array method for looping and receive only value of array as product
        root.innerHTML += htmlCode(product); // Change the inner HTML for root id 
    });

    function htmlCode(info) {
        const {name, price, description, image} = info; // Destructuring the array
        const html = `
        <div id="productCard">
            <h1 class="productTitle">${name}</h1>
            <img class="productImage" src="${image}" />
            <span class="productPrice">$ ${price}</span>
            <p class="productDes">${description}</p>
        </div>
        `;

        return html; // Return html to the showProductCard function.
    }
}
