function missingValues(arr) {
  
    let sorted = arr.sort()
    console.log(sorted)
    let counts = {}
    for(let i = 0; i < sorted.length; i++){
      var num = sorted[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts)
    const once = parseInt(Object.keys(counts).find(key => counts[key] === 1))
    const twice = parseInt(Object.keys(counts).find(key => counts[key] === 2))
  
    return once * once * twice
  }