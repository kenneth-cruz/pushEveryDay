function splitByValue(k, elements){
    array1 = []
    array2 = []
    
    elements.map((number) => {
      number < k ? array1.push(number) : array2.push(number)
    })
    return array1.concat(array2)
  }