var form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var title = e.target.title.value;
    var details = e.target.details.value;
    var imgURL = e.target.imgURL.value;
    var price = e.target.price.value;
    var url = e.target.url.value;

    var product = `
    <div class="productBox">
    <img src="${imgURL}">
    <div id="productHeader">
        <div id="productTitle">${title}</div>
        <div id="productPrice">${price}</div>
    </div>
    <div style="clear: both;"></div>
    <div id="productDetails">
    ${details}
    </div>
    <a href="${url}" target="_blank" rel="noopener noreferrer">
        <button id="viewProduct">View Product</button>
    </a>
</div>
    `;

        document.getElementById('productList').innerHTML += product;
})