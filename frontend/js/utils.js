//connexion API avec la fonction ajax,
function ajax(url, verb ='GET', payload = {}){
    return new Promise((resolve,reject) => { //promesse pour la marche a suivre (rejet ou succes)
    let req = new XMLHttpRequest();
    req.open(verb, url);
    req.addEventListener("load",function(){
        if (req.status >= 200){
        resolve (JSON.parse(req.responseText));   
        } else{
          reject(req.statusText);
        }
      }); 
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(payload));
    });
};
function countProductsInCart()//comptage du nbre de produit mis dans le panier
  {
    if(!hasProductsInCart())
    {
      return 0
    }

    let total = 0;//valeur par defaut si panier vide

    get('products').forEach((product) =>
    {
      total += product.qty
    })

    return total;
}

function displayTotalInHeader()//affiche qty dans le header
  {
    document.getElementById('totalQty').innerHTML = countProductsInCart();
}

function hasProductsInCart()//presence de produit dans le panier 
{
  return !! localStorage.getItem('products')
}

function hide(id)// absence de produit dans le panier  
{
  document.getElementById(id).style.display ='none';
}

function get(item)//recuperation des elements depuis le local storage
{
  return JSON.parse(localStorage.getItem(item));
}

function getUrlValue(id) //recuperation de la clé(id)url
{
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id)
}

 // introduction html grace a `` affichage dans les differentes pages

function render(teddy, type)
  {
    if(type == 'index'){
      return `
        <article id ="articlelistes">
            <h3>${teddy.name}</h3>
            <img src="${teddy.imageUrl}"/>
            <p>${teddy.description}</p>
            <div>${teddy.price/100} €</div>
            <a href="produit.html?id=${teddy._id}"> voir le produit</a>
          </article>  `;
    }
  

    if(type == "single") {

       // Boucle options couleurs
      let articleOptions = '';    
      for (let i = 0; i < teddy.colors.length; i++) {
        //console.log(teddy.colors)
        articleOptions += `<option>${teddy.colors[i]}</option>`
      }
    return `
      <article id ="articleliste">
          <h3>${teddy.name}</h3>
          <img src="${teddy.imageUrl}"/>
          <p>${teddy.description}</p>
          <div class="choix">  
            <select id="choixTeddy" class="articleliste">${articleOptions}</select>
              <a href="index.html?id=${teddy._id}"> Retour a la liste </a>
              <a href="panier.html?id=${teddy._id}"> voir le panier</a>
          </div>
          <div>${teddy.price/100} €</div>
          <button type ="button" id="addToCartButton"> ajouter au panier</button>
          </article> `;
    }

    if (type =="panier")
    {
      return `
      
        <article id ="articlepanier">
            <h3>${teddy.name}</h3>
            <img src="${teddy.imageUrl}" />
            <div style="color:black; margin: 10px;">${teddy.price/100} €</div> 
            <div class ="quantity">Quantité:${teddy.qty}</div>
            <div class ="bouton"style="margin :5px;">
            <span id ="addButton-${teddy._id}" style ="padding:10px;font-size:15px; color:white; background-color: red; border:1px solid white; margin-right:15px"> + </span>
            <span id ="removeButton-${teddy._id}"style ="padding:10px;font-size:15px; color:white; background-color: green; border:1px solid white;"> - </span>
            </div>
           
            </article> 
                `;
    }


}
function store(item, value)//stockage des elements dans le local storage
{
  localStorage.setItem(item, JSON.stringify(value));
}

function show(id)//presence de produit dans le panier 
{
  document.getElementById(id).style.display ='block';
}



