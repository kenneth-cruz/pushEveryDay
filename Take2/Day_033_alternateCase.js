function alternateCase(s) {
    let answer = ''
    let item;
    for(let letter in s){
      if(s[letter] === s[letter].toUpperCase()){
        item = s[letter].toLowerCase()
      }
      else{
        item = s[letter].toUpperCase()
      }
      answer += item
    }
    return(answer)
  }