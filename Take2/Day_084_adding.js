function addLength(str) {
    let splitter = str.split(' ')
    for(let i = 0; i < splitter.length; i++){
      splitter[i] += ` ${splitter[i].length}`
    }
    return(splitter)
  }