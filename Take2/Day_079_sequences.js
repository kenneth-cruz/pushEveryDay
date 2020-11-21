function sumOfN(n) {
    let meep = Math.abs(n)
    let answer = [0, 1]
    if (n === 0) return [0]
    for(let i = 2 ; i <= meep; i ++){
      answer.push(answer[i-1] + i );
      }
       if(n < 0) {
         for(let i = 1; i < answer.length; i++){
           answer[i] *= -1
           }
         }
     return answer
   };