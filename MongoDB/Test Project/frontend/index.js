fetch('http://localhost:3000/products')
.then(response => response.json())
.then(response => console.log(response))