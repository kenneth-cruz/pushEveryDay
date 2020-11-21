var lengthOfLastWord = function(s) {
    let counter = 0
    let word = s.trim()
    for(let i = word.length-1 ; i >= 0; i--){
        if(word[i] !== ' ') counter ++;
        if(word[i] === ' ') return counter
    }
    return counter
};