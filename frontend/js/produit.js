
//appel ajax avec l'URL + id pour le choix produit fait par l'utilisateur 

ajax('http://localhost:3000/api/teddies/' + getProductId())
  .then(product =>
  {
    displayProduct(product);
    listenForCartAddition();  
  })


function displayProduct(teddy){
document.getElementById('app').innerHTML += render(teddy, "single")
}

function getProductId(){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id')
}

function listenForCartAddition()
{
  document.getElementById('addToCartButton').addEventListener('click',function()
    {
      //creation d'un tableau vide pour pouvoir ajouter les produits choisi par l'utilisateur dans le tableau 'products '
      let products = []

      if (hasProductsInCart()){
        products = get('products');
      } 
      
      products.push(getProductId());
      store('products', products);
      alert("votre article a été ajouté au panier");
    });
}

 
