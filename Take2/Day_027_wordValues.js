function wordValue(a) {
    let item = 'a'
    let item2 = 'b'
    let what = item2.charCodeAt()
    let temp = 0
    let zoinks = [];
    let final = []
    for(let i =0; i < a.length; i ++){
      for(let j = 0 ; j < a[i].length; j++){
        if(a[i][j] === ' '){
          temp += 0;
        }
        else{
          temp += (a[i][j].charCodeAt()-96)
        }
      }
      zoinks.push(temp)
      temp = 0;
    }
    for(let i = 0 ; i < zoinks.length; i ++){
      if(i === 0){
        final.push(zoinks[i] * 1)
      }
      else{
        final.push(zoinks[i] * (i+1))
      }
    }
    return(final)
  }