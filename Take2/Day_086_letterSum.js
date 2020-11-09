function digits(num){
    let stringNum = num.toString()
    console.log(stringNum)
    let answer =[]
    for(let i = 0; i < stringNum.length; i++){
      for(let j = i; j < stringNum.length; j++){
        if(j !== i){
          answer.push(parseInt(stringNum[i])+parseInt(stringNum[j]))
        }
      }
    }
    return answer
  }