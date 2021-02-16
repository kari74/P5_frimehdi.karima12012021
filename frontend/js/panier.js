console.log(hasProductsInCart())
if(hasProductsInCart())
{
  hide('cartEmpty');

  ajax('http://localhost:3000/api/teddies/').then(teddies => {
    get('products').forEach(item =>{
        let teddy = teddies.find(teddy =>teddy._id === item.id);//creation d'une boucle pour faire une iteration de ceux qui est present dans le storage 
        teddy.qty = item.qty//ajoute de la propriété (qty) a chaque objet 
        displayTeddy(teddy)
     })

    get('products').forEach(item =>{
       listenForAddition(item.id)
       listenForDeletion(item.id)
     })

    listenForCartSubmission()
  })
}

function listenForAddition(id){
  document.getElementById(`addButton-${id}`).addEventListener('click' , function()
  {
      let products = get('products');

      let index = products.findIndex(product=> product.id=== id);
      products[index].qty ++;
      store('products',  products);
      window.location.reload();
  })
}

function listenForDeletion(id){
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

function listenForCartSubmission()
{
  let btn = document.getElementById('submitButton');
  btn.addEventListener('click', function()
  {
    //e.preventDefault();
    let fistName = document.getElementById('fistName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let email = document.getElementById('email').value;


    console.log(fistName, lastName, address, city, email);

    let payload = {
      contact: {
        fistName: fistName,
        lastName: lastName,
        address: address,
        city: city,
        email: email
    },
    products: get('products')
  }

  ajax('http://localhost:3000/api/teddies/order', 'POST', JSON.stringify(payload)).then(function(res) {
      console.log(res)

    })
})
}


function displayTeddy(teddy)
{
  document.getElementById('app').innerHTML  += render (teddy,"panier")

}

