function isOpposite(s1,s2){
    if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
    
    for(var i = 0; i < s1.length; i++) {
      if(s1.charAt(i) === s2.charAt(i)) return false;
    }
    
    return true;
    
  }