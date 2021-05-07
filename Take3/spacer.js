function stringBreakers(n, string) {
  string = string.split(" ").join("");
  let stringBreak = "";

  for (let i = 0; i < string.length; i++) {
    if (i % n === 0 && i !== 0) {
      stringBreak = stringBreak + "\n" + string[i];
    } else {
      stringBreak = stringBreak + string[i];
    }
  }
  return stringBreak;
}
