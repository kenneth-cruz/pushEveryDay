// concat

function bigToSmall(arr){
    let item = []
    for(let i = 0; i < arr.length; i++){
      item = item.concat(arr[i])
    }
    let sorted = item.sort((a,b) => {return a - b})
    return(item.reverse().join('>'))
  }

// loops

function pickIt(arr){
    var odd=[],even=[];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0) even.push(arr[i])
      else{ odd.push(arr[i])}
    }
    return [odd,even];
  }