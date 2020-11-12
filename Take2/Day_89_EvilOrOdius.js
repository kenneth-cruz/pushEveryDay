function evil(n) {
    console.log(n)
    let binaryNum = ((n >>> 0).toString(2))
    let countOnes = 0
    for(let i = 0; i < binaryNum.length; i++){
      if(parseInt(binaryNum[i]) === 1){
        countOnes++
      }
    }
   return (countOnes % 2 === 0 ? `It's Evil!` : `It's Odious!`)
}