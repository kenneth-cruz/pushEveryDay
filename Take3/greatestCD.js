function mygcd(x,y){
    let lower = Math.min(x,y)
    let upper = Math.max(x,y)
    let counter = 0 
    for (let i = 1; i <= lower; i++){
      if (upper % i === 0 && lower % i === 0){
        counter = i
      }
    }
    return(counter)
  }