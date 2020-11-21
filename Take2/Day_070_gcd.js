function solve(x, y) {
    return x % y ? -1 : [y, x - y];
  }