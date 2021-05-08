function getRealFloor(n) {
    console.log(n)
    if (n === 0){
      return 0
    }
    if (n < 13 && n > 0){
      return  n -1
    }
    if (n < 0){
      return n 
    }
    else{
      return n -2
    }
}