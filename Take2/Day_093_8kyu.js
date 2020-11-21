function combat(health, damage) {
    return (damage <= health ? health - damage : 0)
  }