function evenChars(string) {
  let answerArray = []
  for (let i = 1 ; i < string.length; i+=2){
    answerArray.push(string[i])
  }
  if(string.length < 2 || string.length > 100){
    return 'invalid string'
  }
  else{return answerArray}
}
