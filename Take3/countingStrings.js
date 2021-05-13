function count (string) { 
    let counter = {}
    let split_word = string.split('')
    for (let i = 0; i < split_word.length ; i++){
      const letter = split_word[i]
      if(!(letter in counter)){
        counter[letter] = 1;
      }
      else{
        counter[letter]++;
      }
    }
   return counter
 }