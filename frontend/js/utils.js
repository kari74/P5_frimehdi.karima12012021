//connexion API
function ajax(url, methode ='GET', payload ={})
{
    return new Promise(function (resolve,reject){
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function()
    {
      if(xhr.readyState === 4)
       {
        if (xhr.status === 200)
         {
          let response = xhr.responseText
          resolve (JSON.parse(response));
          
        }
        else
        {
          reject(xhr);
          //alerte serveur
          alert("le serveur ne repond pas!")
        };
      };
    };
    xhr.open(methode, url, true);
    xhr.send(payload);
    });
};

  function displayTotalInHeader()//affiche qty dans le header
  {
    document.getElementById('totalQty').innerHTML = countProductsInCart();
  }
  function countProductsInCart()//comptage du nbre de produit mis dans le panier
  {
    if(!hasProductsInCart())
    {
      return 0
    }

    let total = 0;//valeur par defaut si panier vide

    get('Products').forEach((product) =>
    {
      total += product.qty
    })

    return total;
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
    return `
      <article id ="articleliste">
          <h3>${teddy.name}</h3>
          <img src="${teddy.imageUrl}"/>
          <p>${teddy.description}</p>
          <div class="choix">  
            <select class="select">
                <option selected="">Choix option obligatoire. Merci</option>
                undefined
                <option value="Tan">Tan</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            
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
        <article id ="tr">
            <h3>${teddy.name}</h3>
            <img src="${teddy.imageUrl}"/>
            <p>${teddy.description}</p>
            <div>${teddy.price/100} €</div> 
            <div>${teddy.qty}Quantité:</div>
            <a href="produit.html?id=${teddy._id}"> Retour a la liste </a>
            <span id ="addButton-${teddy._id}" + </span>
            <span id ="removeButton-${teddy._id}" - </span>
            </article> 
                `;
    }

}

function hasProductsInCart()
{
  return !! localStorage.getItem('products')
}

function get(item)//recuperation des elements depuis le local storage
{
  return JSON.parse(localStorage.getItem(item));
}


function store(item, value)//stockage des elements dans le local storage
{
  localStorage.setItem(item, JSON.stringify(value));
}

function show(id)
{
  document.getElementById(id).style.display ='block';
}

function hide(id)
{
  document.getElementById(id).style.display ='none';
}