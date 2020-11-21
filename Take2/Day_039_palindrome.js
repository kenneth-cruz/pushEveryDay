function isPalindrome(line) {
    return ((line).toString().split('').reverse().join('') === (line).toString() ? true : false)
  }