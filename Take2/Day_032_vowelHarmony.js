function dative(word) {
    let tempVowel = '';
    let frontVowel = 'eéiíöőüű'
    let backVowel = 'aáoóuú'
    for(let letter in word){
      if (frontVowel.includes(word[letter]) || backVowel.includes(word[letter])){
        tempVowel = (word[letter])
      }
    }
    if (frontVowel.includes(tempVowel)){
      return word + 'nek'
    }
    else{
      return word + 'nak'
    }
  }