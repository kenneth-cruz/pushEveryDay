function digital_root(n) {
    let stringNum = n.toString().split('')
    let counter = 0
    stringNum.forEach( letter => {
      counter += parseInt(letter)
    })
    if(counter < 10){
      return counter;
    }
    else{
      return digital_root(counter)
    }
  }
  