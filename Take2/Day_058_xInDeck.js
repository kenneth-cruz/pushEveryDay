var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) return false;
  
  let table = new Map();
  
  for (let i = 0; i < deck.length; i++) {
    if (table.has(deck[i])) table.set(deck[i], table.get(deck[i]) + 1);
    if (!table.has(deck[i])) table.set(deck[i], 1);
  }
  
  table = [...table.values()];
  const maxValue = Math.max(...table);
  
  for (let i = 2; i <= maxValue; i++) {
    if (table.every(el => el % i === 0)) return true;
  }
  
  return false;
};