if(sessionStorage.getItem('products'))
{
let products = JSON.parse(sessionStorage.getItem('products'));
/*let html = '';*/

products.forEach(id => 
{
  ajax('https://localhost:3000/api/teddies/'+ id)  
    .then(teddy =>
      {
      document.getElementById('app').innerHTML  += render (teddy,'single')
      })
});

} else{
  document.getElementById('app').innerText ='Aucun produit dans votre panier, selectionner vos articles dans le catalogue'
}


document.getElementById('nom').addEventListener('keydown',function(e)
{
  if(e.target.value.length<3)
  {
    formIsValid = false;
  } else{
    formIsValid= true;
  }
})

/*

function Panier(){
  let nombreProduit = localStorage.getItem('qté'); 
  
  if(nombreProduit){
  document.querySelector ('.totalQté').textContent = nombreProduit;
  }else{
      document.querySelector ('.totalQté').textContent = 0 ;
  }
}

Panier(); 

//    Affichage des articles mis au panier dans la page panier
function afficherPanier(){

let data = JSON.parse(localStorage.getItem('panier'));
  
  
// valeurs du prix total 
  var total = localStorage.getItem('prixTotal');
  var prixPanier = document.getElementById('total');

// affichage total avec ou sans produit 
  if (total != null) {
    prixPanier.textContent = 'Le montant de votre commande est de : ' + total +  ' €';
    prixPanier.id = 'prixTotal'; 
  } else  {
    prixPanier.textContent = 'Le montant de votre commande est de : 0 €';
  }


deleteButtons();

function deleteButtons(){
  let deleteButtons = document.querySelectorAll('supprimer');
  let nomProduit ;
  let nombreTotalProduit = localStorage.get('qté');
    nombreTotalProduit = parseInt(nombreTotalProduit);
  let prixtotalePanier = localStorage.getItem("prixTotal");
  prixtotalePanier = parse(localStorage.getItem('Panier'));

};
};

function productId(products) {
  let panier = JSON.parse(localStorage.getItem('panier'));
  
  products = Object.values(panier).map( (data) => {
    let qté = parseInt(data.qté);
    console.log(typeof qté);
    console.log(qté);
    
    for (let i = 0 ; i< qté ; i ++){
        products.push(data._id);  
      }
       console.log(products); 
      return products; 
     });
 
  };
  
  */