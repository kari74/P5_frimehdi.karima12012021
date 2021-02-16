displayTotalInHeader();
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
      html +=render(teddy, "index")
    });

document.getElementById('app').innerHTML = html
}

