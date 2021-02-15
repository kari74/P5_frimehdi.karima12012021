if(hasProductsInCart())
{
  hide('cartEmpty');


  ajax('http://localhost:3000/api/teddies/').then(teddies =>
  {
    get('products').forEach(teddyId =>{
        let teddy = teddies.find(teddy =>teddy._id ===teddyId);
        displayTeddy(teddy)
     })

   listenForCartSubmission()

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

