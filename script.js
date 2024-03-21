const productList = document.querySelector('.product-list');

const data = {
  "data": [
    {
      "name": "Cosmetics",
      "productList": [
        {
          "name": "Hair Oil",
          "price": 20
        },
        {
          "name": "Face wash",
          "price": 20
        }
      ]
    },
    {
      "name": "Household",
      "productList": [
        {
          "name": "Hair Oil",
          "price": 20
        },
        {
          "name": "Face wash",
          "price": 20
        }
      ]
    }
  ]
};

function renderProducts(products) {
  products.forEach(product => {
    const productItem = document.createElement('li');
    const productTitle = document.createElement('h2');
    const productContent = document.createElement('ul');

    productTitle.textContent = product.name;
    productItem.appendChild(productTitle);

    product.productList.forEach(item => {
      const contentItem = document.createElement('li');
      contentItem.textContent = `${item.name} - Price: ${item.price}`;

      const addToCartButton = document.createElement('button');
      addToCartButton.classList.add('add-to-cart');
      addToCartButton.textContent = 'Add to cart';

      const removeFromCartButton = document.createElement('button');
      removeFromCartButton.classList.add('remove-from-cart');
      removeFromCartButton.textContent = 'Remove from cart';

      contentItem.appendChild(addToCartButton);
      contentItem.appendChild(removeFromCartButton);

      productContent.appendChild(contentItem);
    });

    productItem.appendChild(productContent);
    productList.appendChild(productItem);
  });
}

renderProducts(data.data);


addToCartButton.addEventListener('click', () => {

  console.log(`Adding ${item.name} to cart`);
});
