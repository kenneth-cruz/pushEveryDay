function mergeArrays(arr1, arr2) {
    let answer = [...arr1,...arr2]
    let sorted = [... new Set (answer)]
    return sorted.sort(function (a,b) { return (a-b) } )
  }