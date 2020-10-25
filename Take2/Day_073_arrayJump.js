function consecutive(arr, a, b) {
    let aSpot = arr.indexOf(a),
        bSpot = arr.indexOf(b)
    return (Math.abs(aSpot-bSpot) === 1 ? true : false)
  }