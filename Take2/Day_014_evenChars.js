function evenChars(string) {
let chopped = string.split('')
let answerArray = []
console.log(string)
if (chopped.length < 2 || chopped.length > 100){
  return 'invalid string'
}
for(let i = 1 ; i < chopped.length; i+=2){
  answerArray.push(chopped[i])
}
  return(answerArray)
}
