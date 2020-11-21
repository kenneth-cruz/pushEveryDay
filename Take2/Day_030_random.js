function generateHashtag (str) {
    let hashTag = '#';
    let newArray = [];
    let wordInArray = str.trim('').split(' ');
    if(str.trim('') === '' || str.split(' ').join('').trim('').length >= 140) return false;
    for(let i = 0; i<wordInArray.length; i++){
      let capWord = wordInArray[i].charAt(0).toUpperCase() + wordInArray[i].trim('').slice(1);
      newArray.push(capWord)
    }
    let finalizeWord = hashTag + newArray.join('');
    return finalizeWord
  }