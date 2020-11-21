function maxDiff(list) {
  let sort = list.sort(function(a,b) {return a-b})
  if (list.length === 0){
    return 0
  }
  return list[list.length-1]-list[0]
};
