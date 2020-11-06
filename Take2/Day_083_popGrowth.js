function nbYear(p0, percent, aug, p) {
    console.log(p0, percent, aug, p)
    let yearsCount = 0;
    if (percent === 0){
      while(p0 <= p){
      p0 += aug
      yearsCount ++;
      }
      return yearsCount - 1;
    }
    while(p0 <= p){
      p0 *= (1+(percent/100))
      p0 += aug
      yearsCount ++;
    }
    return yearsCount
}