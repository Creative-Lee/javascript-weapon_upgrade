const { isUpgraded } = require("./utils/UpgradeUtils.js");

class UpgradeGame {
  #grade = 0;
  #currentProbability;

  getGrade() {
    return this.#grade;
  }
}

module.exports = UpgradeGame;
