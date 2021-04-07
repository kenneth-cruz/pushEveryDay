function mango(quantity, price){
    let base = Math.floor(quantity/3)
    let leftover = quantity % 3
    return (base * 2 * price) + (leftover * price)
  }