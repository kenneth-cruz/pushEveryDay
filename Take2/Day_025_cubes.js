var cubeChecker = function(volume, side){
    return ( side <= 0 ? false :
           ( volume <= 0 ? false :
           ( (side * side * side) === volume ? true : false)))
  };
  
  