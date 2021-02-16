displayTotalInHeader();
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

function listenForCartAddition(){
  document.getElementById('addToCartButton').addEventListener('click',function()
  {
      //creation d'un tableau vide pour pouvoir ajouter les produits choisi par l'utilisateur dans le tableau 'products '
      let products = []

      if (hasProductsInCart())
      {
          products = get('products');
      } 


      if(productExists(get('products'),getProductId()))
      {
          let index = products.findIndex(product => product.id === getProductId());
          products[index].qty ++;
          store('products',  products);
      } else {  
          products.push({ id: getProductId(),qty: 1 });
          store('products', products);
      }

      displayTotalInHeader();

      alert("votre article a été ajouté au panier");

  });
}

function productExists(products, id){
  return!! products.filter(product => product.id=== id).length> 0
}
