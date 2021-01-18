function panier(){
    let nbreProduit = localStorage.getItem('qté');
  
      if(nbreProduit){
        document.querySelector('.totalQté').textContent =nbreProduit;  
      }else{
        document.querySelector('.totalQté') .textContent = 0;
      }

function produit(){
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
    price.textContent = teddy.price +"€";

 var description = document.createElement('h4');
 description.textContent = 'Description : ourson fait main';
 var Descriptions = document.createElement('p');
 Descriptions.textContent = teddy.Descriptions;
 
    }
}