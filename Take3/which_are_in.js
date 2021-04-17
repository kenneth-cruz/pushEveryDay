function inArray(array1,array2){
    let matches = []
    for(let i =0; i < array2.length; i++){
      for(let j = 0 ; j < array1.length; j++){
        if (array2[i].includes(array1[j])){
          matches.push(array1[j])
        }
      }
    }
    let unique_matches = [... new Set(matches)]
    return unique_matches.sort()
  }