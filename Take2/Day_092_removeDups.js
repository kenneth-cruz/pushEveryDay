function distinct(a) {
    let answer = [];
    for (let item in a){
      if(!answer.includes(a[item])){
        answer.push(a[item])
      }
    }
    return answer
  }