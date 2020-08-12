function solve(s){
    let upperCounter = 0;
    let lowerCounter =0;
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toLowerCase()){
        lowerCounter++;
      }
      else{upperCounter++}
    }
    if(upperCounter > lowerCounter){
      return s.toUpperCase()
    }
    else{ return s.toLowerCase()}
}
