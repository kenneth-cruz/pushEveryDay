function smallEnough(a, limit){
    let isTrue = true
    a.forEach(item => {
      if(item <= limit) {
      }
      else{
        isTrue = false
      }
    })
    return isTrue
  }