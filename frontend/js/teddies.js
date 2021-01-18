function panier(){
  let nbreProduit = localStorage.getItem('qté');

    if(nbreProduit){
      document.querySelector('.totalQté').textContent =nbreProduit;  
    }else{
      document.querySelector('.totalQté') .textContent = 0;
    }
}

panier();
//connexion API
var teddy =function(url){
  return new Promise(function (resolve,reject){
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      }
      else{
        reject(xhr);
        //alerte serveur
        alert("le serveur ne repond pas!")
      };
    };
  };
  xhr.open('GET', 'http://localhost:3000/api/teddies/',true);
  xhr.send();
  });
};

var catchError= function(Erreur){
  console.error('erreur AJAX', Erreur);
};
//recuperation données serveur

var products =async function(){
  const response = await teddy('http://localhost:3000/api/teddies/');
  var products = JSON.parse(response);
  return products;
};
let ourson = document.getElementById('ourson');

//affichage liste articles

products().then(function(products){
  console.log(products);


//methode forEach pour l'éxécusion d'une fonction données a  chaque élement de la liste
products.forEach(teddy => {
  var article = document.createElement('article');
  article.id="articleliste";

  var div = document.createElement('div');
    var nom = document.createElement("h3")
    nom.textContent = teddy.name;
    nom.id="teddy";

  var image =document.createElement("img");
  image.src = teddy.imageUrl;

  var prix = document.createElement("h4");
  prix.textContent="prix";
    var price =document.createElement("p");
    price.textContent = teddy.price/100 +"€";
 
  var id = teddy.id;

  let link= document.createElement("a");
    link.id = "lien";
    link.href = "produit.html?id = "+ teddy._id;
    link.textContent ="visualiser l'ourson";

  //elements pour l'affichage en boucle des autres article

    ourson.appendChild(article);
    article.appendChild(image);
    article.appendChild(nom);
    article.appendChild(div);
    div.appendChild(prix);
    div.appendChild(price);
    div.appendChild(link);
  });
});