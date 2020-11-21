function findOutlier(integers){
  const filterNumberOdd = integers.filter(item => item % 2 != 0)
  const filterNumberEven = integers.filter(item => item % 2 === 0)
  if (filterNumberOdd.length > filterNumberEven.length){
    return filterNumberEven[0];
  }
  else { return filterNumberOdd[0]}
}
