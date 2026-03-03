export const cart = []

export function addToCart ( prodcutId) {
    let matchingItem;
    cart.forEach((cartItem)=> {
      if (prodcutId === cartItem.prodcutId) {
        matchingItem = cartItem
      }
    })
  
    if(matchingItem){
      matchingItem.quantity += 1
    } else {
      cart.push({
      prodcutId : prodcutId,
      quantity : 1
    })
    }
}

export function updateCartQuantity (){
  let cartQuantity  = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity
    })
    document.querySelector('.js-cart-quantity').innerText = `${cartQuantity}`
}
