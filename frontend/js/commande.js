
function getOrderId(){
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}
  {
 
  //console.log(getOrderId());
  //affichage de l'order Id 
   let order = getOrderId();
   document.getElementById('order').innerHTML = ('orderId');
   
  
}
