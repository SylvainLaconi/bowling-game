const assert = require("assert");
const Bowling = require("../bowling");

describe("Bowling game", () => {
  it("le score est 0 si aucune quille n'est touchée", () => {
    let game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    assert.strictEqual(game.getScore(), 0);
  });

  it("le score est 20 si 1 quille tombe à chaque lancé", () => {
    let game = new Bowling();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    assert.strictEqual(game.getScore(), 20);
  });

  it("le score est 5 si 3 et 2 quilles tombent", () => {
    let game = new Bowling();
    for (let i = 0; i < 18; i++) {
      game.roll(0);
    }
    game.roll(3);
    game.roll(2);
    assert.strictEqual(game.getScore(), 5);
  });

  it("un spare applique un bonus sur le lancé suivant", () => {
    let game = new Bowling();
    game.roll(5);
    game.roll(5);
    game.roll(1);
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }
    assert.strictEqual(game.getScore(), 12);
  });

  it("un strike applique un bonus sur la paire de lancés suivants", () => {
    let game = new Bowling();
    game.roll(10);
    game.roll(1);
    game.roll(1);
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }
    assert.strictEqual(game.getScore(), 14);
  });
});
