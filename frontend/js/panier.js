displayTotalInHeader();//afficher le total article dans le header

enableSubmitButton();
let products = [];
show('cartEmpty');
hide('formulaire'); 
hide('totalPrice')
if(hasProductsInCart())
{
  hide('cartEmpty');
  show('formulaire');
  show('totalPrice');

ajax('http://localhost:3000/api/teddies/').then(teddies =>
  {
    let total = 0;
    get('products').forEach(item =>{
        let teddy = teddies.find(teddy =>teddy._id === item.id);//creation d'une boucle pour faire une iteration de ceux qui est present dans le storage 
        teddy.qty = item.qty//ajoute de la propriété (qty) a chaque objet 
        total += teddy.price * item.qty
        displayTeddy(teddy)
   })

get('products').forEach(item =>{
       listenForAddition(item.id)
       listenForDeletion(item.id)
  })

  listenForCartEmpty();
  listenForFormChange();

  document.getElementById(`total`).innerHTML= total/100 + '€';
  })
}

function disableSubmitButton()//button inactif si formulaire invalide
{
  document.getElementById('submitButton').setAttribute('disabled','disabled');
  document.getElementById('submitButton').style.opacity = '0.5';
  document.getElementById('submitButton').style.backgroundColor = 'red';
}

function displayTeddy(teddy) // affichage produits panier
{
  document.getElementById('apPanier').innerHTML  += render (teddy,"panier")

}

function enableSubmitButton()//button actif si formulaire valide
{
  document.getElementById('submitButton').removeAttribute('disabled');
  document.getElementById('submitButton').style.opacity = '1';
  document.getElementById('submitButton').style.backgroundColor = 'green';
}

function getImputValue(id)
{
  return document.getElementById(id).value;
}

function isStringValid( str, min = 1, max = 255)
{
  if(str.length < min)
  {
    return false;
  }

  if(str.length > max)
  {
     
    return false;
  }

    return true; 
  }

function listenForAddition(id) { //ajout produit
  document.getElementById(`addButton-${id}`).addEventListener('click' , function()
  {
      let products = get('products');

      let index = products.findIndex(product=> product.id=== id);
      products[index].qty ++;
      store('products',  products);
      window.location.reload();
  })
}


function listenForCartEmpty(){  // vider le panier
  document.getElementById('clear').addEventListener('click',() =>{
  localStorage.clear();
  location.reload();
  })
}

function listenForCartSubmission()  //soumission du formulaire
{
  let btn = document.getElementById('submitButton');
  btn.addEventListener('click', function(e)
  {
    e.preventDefault();
   
  
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;

    console.log(firstName, lastName, address, city, email);
    let productIds =[];
    get('products').forEach((product) =>{ productIds.push(product.id)})

    let payload = {
      contact: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email
    },
    products: productIds
  }

  ajax('http://localhost:3000/api/teddies/order', 'POST', payload).then((response) => {
     
    window.location.href = `commande.html?commande=${response.orderId}`;
    })
})
}

function listenForDeletion(id){  // suppression produit
  document.getElementById(`removeButton-${id}`).addEventListener('click' , function(){
    let products = get('products');

    let index = products.findIndex(product=> product.id=== id);
   
    if (products[index].qty == 1){
      products.splice(index, 1)
    } else {
    products[index].qty --;
    }
    
    store('products',  products);
    window.location.reload();
  })
}

function listenForFormChange()
{
  let inputIds = ['lastName', 'firstName', 'address', 'city', 'email'];
  inputIds.forEach((inputId) => 
  {
    document.getElementById(inputId).addEventListener('change', validateForm);
  })
}
function  isEmailValid(email) 
{
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return true ;
  }
  alert("You have entered an invalid email address!")
    return false;
}

function validateForm()
{
  console.log('on valide les données...')
  disableSubmitButton();

  if (isStringValid(getImputValue('lastName'))
    && isStringValid(getImputValue('firstName'))
    && isStringValid(getImputValue('address'), 10, 50)
    && isStringValid(getImputValue('city'))
    && isEmailValid(getImputValue('email'))
  )
 
  {
    enableSubmitButton();
    listenForCartSubmission()
  }
  
}

 