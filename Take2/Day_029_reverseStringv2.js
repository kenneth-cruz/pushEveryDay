function solve(st,a,b){
    let temp = []
    for(let i = 0; i < st.length; i++){
      if(i >= a && i <= b){
        temp.push(st[i])
      }
    }
    let reversedInside = temp.reverse().join('')
    return(st.substring(0,a) + reversedInside + st.substring(b+1, st.length))
   }
     