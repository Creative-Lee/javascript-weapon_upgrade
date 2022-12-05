class UpgradeGame {
  #grade = 0;
  #miniGame;

  constructor(miniGame) {
    this.#miniGame = miniGame;
  }

  getGrade() {
    return this.#grade;
  }

  initMiniGameNumber(number) {
    this.#miniGame.setNumber(number);
  }
}

module.exports = UpgradeGame;
