function powersOfTwo(n){
  let answer_array = []
  for ( let i = 0; i <=n ; i++){
    answer_array.push(2**i)
  }
  return answer_array
}