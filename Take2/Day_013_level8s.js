// Find Multiples of a Number

function findMultiples(integer, limit) {
  let answerArray= []
  for(let i = integer ; i <= limit; i+= integer){
    answerArray.push(i)
  }
  return answerArray
}

// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor(s*1000*100/60/60)
}

//Returning Strings

function greet(name){
  return `Hello, ${name} how are you doing today?`
}
