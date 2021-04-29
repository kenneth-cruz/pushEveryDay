function areEqual(value1, value2) {
    if (typeof value1 !== 'object' || typeof value2 !== 'object')
      return value1 === value2
      
    const keys = [...new Set([
        ...Object.keys(value1),
        ...Object.keys(value2)
      ])
    ]
        
    return keys.every(key => areEqual(value1[key], value2[key]))
  }