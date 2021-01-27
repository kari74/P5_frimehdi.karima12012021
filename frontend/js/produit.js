
//appel ajax

ajax('http://localhost:3000/api/teddies/' +getProductId())
  .then(product =>
  {
    displayProduct(product);
    listenForCartAddition();  
  })


function displayProduct(teddy)
{

document.getElementById('app').innerHTML = render(teddy, "single")
}

function getProductId()
{
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('id')
}

function listenForCartAddition()
{
  document.getElementById('addToCartButton').addEventListener('click',function()
    {
      let products;

      if (sessionStorage.getItem('products'))
      {
        products = JSON.parse(sessionStorage.getItem('products'));
      } else {
        products = [];
      }

      products.push(getProductId());
      sessionStorage.setItem('products', JSON.stringify(products));
    });
}

 
