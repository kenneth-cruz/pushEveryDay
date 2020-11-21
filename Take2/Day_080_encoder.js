function duplicateEncode(word){
    let allwords = word.toLowerCase()
    let item = {}
    let answer = ''
    for(let i = 0; i < allwords.length; i++){
      var character = allwords.charAt(i)
      if(item[character]){
        item[character] ++
      }
      else{
        item[character] = 1;
      }
    }
  for(let i = 0; i < allwords.length; i++){
      var character = allwords.charAt(i)
      if(item[character] === 1 ){
        answer += '(';
    }
      else{
        answer += ')';
      }
    }
  return(answer)
}
