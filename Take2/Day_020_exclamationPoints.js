function removeExclamationMarks(s) {
  console.log(s)
  let answer = ''
  for(let letter in s){
    if(s[letter] === '!'){
      answer += ''
    }
    else{answer += s[letter]}
  }
  return answer;
}
