
function getOrderId(orderId){
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(orderId);
}

 
  console.log(getOrderId());
  //affichage de l'order Id 
   let order = getOrderId('order');
   document.getElementById('orderOK').innerHTML = order;
   
  

