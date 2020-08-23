function getAverage(marks){
  let counter = 0;
  marks.forEach(item => counter += item)
  return(Math.floor(counter/(marks.length)))
}
