function solve(arr){  
    let counter = 0
    let counter_array = []
    arr.forEach(word => {
      for(let i = 0; i < word.length; i++){
        if (i+1 === word[i].toLowerCase().charCodeAt(0) - 96){
          counter++
        }
      }
      counter_array.push(counter)
      counter = 0
    })
    return(counter_array)
   };