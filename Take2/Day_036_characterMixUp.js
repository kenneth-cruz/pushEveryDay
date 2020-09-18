function correct(string){
    let answer = ''
    for(let letter in string){
      if(string[letter] === '5'){
        answer += 'S'
      }
      else if(string[letter] === '0'){
        answer += 'O'
      }
      else if(string[letter] === '1'){
        answer += 'I'
      }
      else{
        answer += string[letter]
      }
    }
    return answer
  }