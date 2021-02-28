

displayTotalInHeader();//afficher le total article dans le header
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

function listenForAddition(id) {
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


//function displayTotal(total){
 // document.getElementById('totalPrice').innerHTML ='prix total =' + total( total);
//}
function totalPrice(){
 document.getElementById(`totalPrice-${totalAmount}` + ` €`);
 let totalPrice =  ('totalPrice')
 let totalAmount = 0;
 let i = 0; i<panier.length; i++;
 {
    totalAmount += panier[i].price * panier[i].quantity;
 }
 totalPrice.innerText = `totalPrice` + ` €`
}

function listenForCartEmpty(){
  document.getElementById('clear').addEventListener('click',() =>{
    Storage.clear();
    location.reload();
  })
}

function listenForCartSubmission()
{
  let btn = document.getElementById('submitButton');
  btn.addEventListener('click', function(e)
  {
    e.preventDefault();
  
    let firstName = document.getElementById('fistName').value;
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
     // console.log(res)
     //affichage de l'order Id si form=ok
   //
    window.location.href = `commande.html?commande =${response.orderId}`;
    })
})
}


function displayTeddy(teddy)
{
  document.getElementById('app').innerHTML  += render (teddy,"panier")

}

