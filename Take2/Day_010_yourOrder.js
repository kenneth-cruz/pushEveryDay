function order(words){
  let arrayWords = (words.split(' '))
  let answerArray = []
  for(const word of arrayWords){
    if(word.includes('1')){
      answerArray[0] = word
    }
    else if(word.includes('2')){
      answerArray[1] = word
    }
    else if(word.includes('3')){
      answerArray[2] = word
    }
    else if(word.includes('4')){
      answerArray[3] = word
    }
    else if(word.includes('5')){
      answerArray[4] = word
    }
    else if(word.includes('6')){
      answerArray[5] = word
    }
    else if(word.includes('7')){
      answerArray[6] = word
    }
    else if(word.includes('8')){
      answerArray[7] = word
    }
    else if(word.includes('9')){
      answerArray[8] = word
    }
  }
  return(answerArray.join(' '))
}
