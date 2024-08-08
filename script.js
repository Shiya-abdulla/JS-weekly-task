let productsData = [];

// Fetch products data
const res = fetch('https://dummyjson.com/products');
res.then((resolve) => resolve.json())
   .then((val) => {
       productsData = val.products; // Store products data
       displayProducts(productsData); // Display all products initially
   })
   .catch((err) => console.log(err));

// Function to display products
function displayProducts(products) {
    const productList = document.querySelector('.d1');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card', 'col-lg-3', 'col-md-4', 'mb-4');
        productCard.style.height = '400px';

        productCard.innerHTML = `
            <img src="${product.thumbnail}" width="200px" height="200px" class="container">
            <div class="card-body">
                <h5 class="card-title" style="height: 50px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${product.title}</h5>
                <h6 class="card-title" style="max-height: 100px; overflow-y: auto;">${product.description}</h6>
                <h6 class="card-title">$${product.price}</h6>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Search button click
document.getElementById('search-button').onclick = function() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const filteredProducts = productsData.filter(function(product) {
      return product.title.toLowerCase().includes(searchTerm);
  });
  displayProducts(filteredProducts);
};
