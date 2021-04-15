function getSum( a,b ) {
    let smallNumber = Math.min(a,b)
    let largeNumber = Math.max(a,b)
    let counter = 0;
    for(let i = smallNumber; i <= largeNumber; i ++){
      counter += i;
    }
    return counter
 }