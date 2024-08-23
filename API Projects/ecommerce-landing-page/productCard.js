const productCard = (product) => {
    let {image, price, title, description} = product;
    if (title.length >= 20)
    {
        title = title.slice(0,20) + '...'; // Slice the title
    }

    if (description.length >= 130)
    {
        description = description.slice(0, 130) + '...'; // Slice the description
    }

    const htmlCode = `
        <div class="product">
            <img src='${image}' />
            <h1>${title}</h1>
            <h3>Price : $${price}</h3>
            <p>${description}</p>
        </div>
    `;
    return htmlCode;
}



export default productCard;