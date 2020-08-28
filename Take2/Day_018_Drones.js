function flyBy(lamps, drone){
  let array = lamps.split('')
  if(lamps.length > drone.length){
    for (let i = 0; i < drone.length; i++){
    array[i] = 'o'
    }
  }
  else{for (let i = 0; i < lamps.length; i++){
    array[i] = 'o'
    }
  }
  return array.join('')
}
