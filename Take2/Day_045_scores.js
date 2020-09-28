const checkExam = (array1, array2) => {
    let result = array2.reduce(
      (score, answer, i) => {
        if(answer == array1[i]) return score += 4;
        else if(answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
  }