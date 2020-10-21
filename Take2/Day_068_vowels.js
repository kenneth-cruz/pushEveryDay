function isVow(a){
    let answer = []
    let vowels = 'aeiou'
    for(let item in a){
      if(vowels.includes(String.fromCharCode(a[item]))){
        answer.push(String.fromCharCode(a[item]))
      }
      else {
        answer.push(a[item])
      }
    }
    return(answer)
  }