function defineSuit(card) {
    return (card[card.length-1] === '♣' ? 'clubs' :
           (card[card.length-1] === '♦' ? 'diamonds' :
           (card[card.length-1] === '♥' ? 'hearts' : 'spades')))
  }
  