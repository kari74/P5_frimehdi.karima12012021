
//appel ajax

ajax('http://localhost:3000/api/teddies/' + getPanierId())
  .then(Panier =>
     {
      displayPanier(Panier);
    })


  function displayPanier(teddy)
  {
   
  
  document.getElementById('app').innerHTML = renderPanier(teddy)
  }


  function getPanierId()
{
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('id')
};

/*
//traitement générique du formlaire
document.forms("formulaire").addEventListener("submit", function(e){
  
  var erreur;
  var inputs = this;

  for(var i =0; i< inputs; i++){
    console.log(inputs[i]);
    if (!inputs[i].value) {
      erreur ="veuillez renseigner tous les champs";
    }
  }

  if(erreur) {
    e.preventDefault();
   document.getElementById("erreur").innerHTML = erreur;
   return false;
  } else{
    alert('valider!');
  }

});*/

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
  
  