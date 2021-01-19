ajax('http://localhost:3000/api/teddies/')
.then(products =>
{
  displayProducts(products);
  });

function displayProducts(products)
{
  let html='';

  products.forEach(teddy =>
    {
      html +=render(teddy, 'card')
    });

document.getElementById('app').innerHTML = html

}
