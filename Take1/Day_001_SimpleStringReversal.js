// Codewars: level 7
// Simple String Removal


function solve(str){
   let spaceSpots = [];
   console.log(str)
   for(let i = 0; i < str.length ; i ++){
     if(str[i] === ' '){
       spaceSpots.push(i)
     }
   }
   let jumbledLetters = str.split('').reverse()

   for (let i = 0 ; i < jumbledLetters.length; i ++){
     if(jumbledLetters[i] === " "){
       jumbledLetters.splice(i, 1);
     }
   }
  let almostDone = jumbledLetters
  for (let i = 0; i < almostDone.length; i++){
    for ( let j = 0 ; j < spaceSpots.length; j ++){
      if(i+1 === spaceSpots[j]){
        almostDone.splice(i+1, 0, ' ')
      }
    }
  }
  return(almostDone.join(''))
}
