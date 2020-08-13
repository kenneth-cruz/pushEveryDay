function squareSum(numbers){
  let answerArray= [];
  numbers.forEach(item => answerArray.push(item * item))
  return answerArray.reduce((sum, token) => sum + token, 0)
}
