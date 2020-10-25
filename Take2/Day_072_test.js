function splitAndMerge(string, separator) {
    let splitter = string.split(' ')
    let answer = []
    splitter.forEach(item => answer.push(item.split('').join(separator)))
    return(answer.join(' '))
  }