function getNumberFromString(s) {
    console.log(s)
     let answer = ''
     for(let i = 0; i < s.length; i++){
       if(Number.isInteger(parseInt(s[i])) === true){
         answer += s[i]
       }
       else{
         console.log('non-number')
       }
     }
     return parseInt(answer)
   }