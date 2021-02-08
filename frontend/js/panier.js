if(sessionStorage.getItem('products'))
{
let products = JSON.parse(sessionStorage.getItem('products'));

products.forEach(id => 
{
  console.log(id)
  ajax('http://localhost:3000/api/teddies/' + id)  
    .then(teddy =>
      {
      document.getElementById('app').innerHTML  += render (teddy,"panier")
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

document.getElementById('prenom').addEventListener('keydown',function(e)
{
  if(e.target.value.length<3)
  {
    formIsValid = false;
  } else{
    formIsValid= true;
  }
})

document.getElementById('adress').addEventListener('keydown',function(e)
{
  if(e.target.value.length<3)
  {
    formIsValid = false;
  } else{
    formIsValid= true;
  }
})

document.getElementById('city').addEventListener('keydown',function(e)
{
  if(e.target.value.length<3)
  {
    formIsValid = false;
  } else{
    formIsValid= true;
  }
})

document.getElementById('email-confimation').addEventListener('keydown',function(e)
{
  if(e.target.value.length<3)
  {
    formIsValid = false;
  } else{
    formIsValid= true;
  }
})

document.getElementById('valider').addEventListener('submit', function(e){

e.preventDefault(); 
if(verifInputs()){
  alert('verifier le formoulaire');
  return;
}


function getProductId()
{
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get('id')
}
})