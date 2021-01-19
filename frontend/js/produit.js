
ajax('http://localhost:3000/api/teddies/' + getProductId())
.then(product =>
  {
    displayProduct(product);
})


function displayProduct(teddy)
{
document.getElementById('app').innerHTML = render(teddy, 'single')
}

function getProductId()
{
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') 
}