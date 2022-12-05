const { isUpgraded } = require("./utils/UpgradeUtils.js");
const { PROBABILITY, INCREASE_PROBABILITY } = require("./constants/condition.js");

class UpgradeGame {
  #grade = 0;

  getGrade() {
    return this.#grade;
  }

  getCurrentProbabilty({ gameType, isMatched }) {
    const toNextGrade = 1;
    let totalProbability = PROBABILITY[this.#grade + toNextGrade];

    if (isMatched) {
      totalProbability += INCREASE_PROBABILITY[gameType];
    }

    return totalProbability > 100 ? 100 : totalProbability;
  }

  hasUpgraded(currentProbability) {
    return isUpgraded(currentProbability);
  }

  upgrade() {
    this.#grade += 1;
  }
}

module.exports = UpgradeGame;
