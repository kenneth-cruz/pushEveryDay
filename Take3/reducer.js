function average(scores) {
    const sum = (accumulator, currentVal) => {
      return accumulator + currentVal
    }
    return Math.round(scores.reduce(sum,0)/scores.length)
}