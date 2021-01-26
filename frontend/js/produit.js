
//appel ajax

ajax('http://localhost:3000/api/teddies/' +getProductId())
  .then(product =>
  {
    displayProduct(product);
  })


function displayProduct(teddy)
{

document.getElementById('app').innerHTML = renderProduit(teddy)
}


function getProductId()
{
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('id')
}

function Panier(){
  let nombreProduit = localStorage.getItem('qté'); 
  
  if(nombreProduit){
  document.querySelector ('.totalQté').textContent = nombreProduit;
  }else{
      document.querySelector ('.totalQté').textContent = 0 ;
  }
}

Panier(); 
