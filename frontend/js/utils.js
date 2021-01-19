
function ajax(url)
{
    return new Promise(function (resolve,reject)
    {
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function()
    {
      if(xhr.readyState === 4)
       {
        if (xhr.status === 200)
         {
          let response = xhr.responseText
          resolve(JSON.parse(response));
        }
        else
        {
          reject(xhr);
          //alerte serveur
          alert("le serveur ne repond pas!")
        };
      };
    };
    xhr.open('GET', 'http://localhost:3000/api/teddies/', true);
    xhr.send();
    });
  };
  
function render(teddy, type)
  {
      if(type =='card')
      {
        return `
        <article id ="articleliste">
            <h3>${teddy.name}</h3>
            <img src="${teddy.imageUrl}"/>
            <p>${teddy.description}</p>
            <div>${teddy.price/100} €</div>
            <a href="produit.html?id=${teddy.id}"> voir le produit</a>
        </article> 
            `;
        }

  if(type=='single')
  {
    return `
    <article id ="articleliste">
        <h3>${teddy.name}</h3>
        <img src="${teddy.imageUrl}"/>
        <p>${teddy.description}</p>
        <div>${teddy.price/100} €</div>
        <a href="produit.html?id=${teddy.id}"> voir le produit</a>
    </article> 
        `;

    }
  }
