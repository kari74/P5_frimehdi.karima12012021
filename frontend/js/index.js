displayTotalInHeader();//affichage du nombre de produit dans le panier

//appel ajax
ajax('http://localhost:3000/api/teddies/')
.then(products =>//response appel
{
  
  //affichage produits
  displayProducts(products);

})

function displayProducts(products){//affichage des produits
 // console.log(displayProducts)
  let html='';

  products.forEach(teddy =>
    {
      html +=render(teddy, "index")
    });

document.getElementById('app').innerHTML = html
}

