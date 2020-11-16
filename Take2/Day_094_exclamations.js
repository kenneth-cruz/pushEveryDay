function replace(s){
    let vowel = 'aeiouAEIOU'
    let answer = ''
    for(let i = 0 ; i < s.length; i++){
      if (vowel.includes(s[i]) === true ){
        answer += '!'
      }
      else{
        answer += s[i]
      }
    }
    return(answer)
  }