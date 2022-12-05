const { isUpgraded } = require("./utils/UpgradeUtils.js");
const { PROBABILITY, INCREASE_PROBABILITY } = require("./constants/condition.js");

class UpgradeGame {
  #grade = 0;

  getGrade() {
    return this.#grade;
  }

  getCurrentProbabilty({ gameType, isMatched }) {
    const toNextGrade = 1;
    const increasedProbability = INCREASE_PROBABILITY[gameType];

    if (isMatched) {
      return PROBABILITY[this.#grade + toNextGrade] + increasedProbability;
    }

    return PROBABILITY[this.#grade + toNextGrade];
  }

  hasUpgraded(currentProbability) {
    return isUpgraded(currentProbability);
  }

  upgrade() {
    this.#grade += 1;
  }
}

module.exports = UpgradeGame;
