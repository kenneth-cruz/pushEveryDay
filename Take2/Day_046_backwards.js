function cleanString(s) {
    let answer = []
    for(let i = 0 ; i < s.length; i ++){
      answer.push(s[i]);
      if(s[i] === '#'){
        answer.pop()
        answer.pop()
      }
    }
    return(answer.join(''))
  };