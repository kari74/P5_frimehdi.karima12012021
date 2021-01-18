/*var links = document.querySelectorAll('.ourson')
for(var i = 0; i <links.length; i++){
    var link = links[i]
    link.addEventListener('click', function(){
        var httpRequest = new XMLHttpRequest ()
httpRequest.onreadystatechange = function(){
   
    if(httpRequest.readyState ===4){
        
        document.getElementById('ourson').innerHTML= httpRequest.responseText
        }
    }

Request.open('GET', "http://localhost:3000/api/teddies",true)
Request.send();
    })
}*/

//Mise a jour du nombre de produit dans l'onglet panier
function chargementPanier(){
    let nombreProduit = localStorage.getItem('qté'); 
    
    if(nombreProduit){
    document.querySelector ('.totalQté').textContent = nombreProduit;
    }else{
        document.querySelector ('.totalQté').textContent = 0 ;
    }
  }
  
  chargementPanier(); 
  //    Connexion à l'API pour récupération des données du serveur
  var teddy = function (url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseText);
            } else {
              reject(xhr);
              // alerte si le serveur ne répond pas
              alert("Nous sommes désolé, le serveur ne répond pas ! ")
            };
          };
        };
        xhr.open('GET','http://localhost:3000/api/teddies/', true);
        xhr.send();
      });
    };
  // affichage erreur si la requete AJAX ne fonctionne pas
  var catchError = function(e){
    console.error('Erreur AJAX', e);
  };
  
 
  // requete pour recupérer les données serveur 
  var products = function () {
    return teddy('http://localhost:3000/api/teddies/').then(function (response) {
      var products = JSON.parse(response);
      return products;
    });
  };
  let ourson = document.getElementById('ourson');
  
    // Affichage de la liste des articles grace à JS
  
    products().then(function(products){
    console.log(products);
    
  
   // forEach pour affichage liste
    products.forEach( teddy=> {
    
      var article = document.createElement('article');
      article.id= "articleListe";
  
        var image = document.createElement('img');
        image.src =  teddy.imageUrl;
  
          var div = document.createElement('div');
            var nom = document.createElement('h3');
            nom.textContent = teddy.name;
            nom.id = "teddy";
  
            var prix = document.createElement('h4');
            prix.textContent = 'Prix :';
              var price = document.createElement('p');
              price.textContent = teddy.price + ' €';
      
            var id = teddy._id;
  
            let link = document.createElement('a');
              link.id = "lien";
              link.href = 'produit.html id=' + teddy._id;
              link.textContent = "Voir l'ourson";
    
  
  //éléments pour les autres articles affichés en boucle dans le DOM
  
      ourson.appendChild(article);
      article.appendChild(nom);
      article.appendChild(image);
      article.appendChild(div);
      div.appendChild(prix);
      div.appendChild(price);
      div.appendChild(link)
    });
  });
