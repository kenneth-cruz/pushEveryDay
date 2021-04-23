function evenLast(numbers) {
    let counter = 0
    if(numbers.length==0){return 0}
    for (let i = 0 ; i < numbers.length; i+=2){
      counter += numbers[i]
    }
  
      return counter * numbers[numbers.length-1]
  }