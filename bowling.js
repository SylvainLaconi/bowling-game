class Bowling {
  constructor() {
    this.rolls = [];
  }

  //A chaque lancé, retourne le nb de quilles tombées
  roll(pins) {
    this.rolls.push(pins);
  }

  //Renvoie le score totale de la partie
  getScore() {
    let score = 0;
    let rollIndex = 0; //index du lancé

    for (let i = 0; i < 10; i++) {
      if (this.rolls[rollIndex] === 10) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]; // si le lancé fait tomber 10 quilles alors on applique un bonus égale à la somme des 2 lancés suivants
        rollIndex++;
        continue;
      }

      let frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      frameScore === 10
        ? (score += 10 + this.rolls[rollIndex + 2]) // si les 2 lancés font tomber 10 quilles alors on applique un bonus égale au lancé suivant
        : (score += frameScore);

      rollIndex += 2;
    }
    return score;
  }
}

module.exports = Bowling;
