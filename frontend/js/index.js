
//appel ajax
ajax('http://localhost:3000/api/teddies/')//appel ajax
.then(products =>//response appel
{
  
  //affichage produit
  displayProducts(products);
 
})

function displayProducts(products){
  let html='';

  products.forEach(teddy =>
    {
      html +=render(teddy)
    });

document.getElementById('app').innerHTML = html
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