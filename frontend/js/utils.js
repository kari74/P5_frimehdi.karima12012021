//connexion API
function ajax(url)
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
    xhr.open('GET', url, true);
    xhr.send();
    });
};



  // introduction html grace a ``

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
        <article id ="articleliste">
            <h3>${teddy.name}</h3>
            <img src="${teddy.imageUrl}"/>
            <p>${teddy.description}</p>
            <div>${teddy.price/100} €</div> 
            <div>${teddy.totalQté}Quantité:</div>
            <div>${teddy.totalPanier} total de votre panier</div>
            <a href="produit.html?id=${teddy._id}"> Retour a la liste </a>
            </article> 
                `;
    }

}
