function allNonConsecutive (arr) {
 let answerArray = []
 for(let i = 0; i < arr.length-1; i++){
   if (arr[i] + 1 !== arr[i+1]){
     answerArray.push({
       'i': i+1,
       'n': arr[i+1],
     })
   }
 }
  return(answerArray)
}
