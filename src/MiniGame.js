const typeChecker = require("./utils/typeChecker.js");
const { COMMAND } = require("./constants/condition.js");

class MiniGame {
  #number;

  setNumber(number) {
    this.#number = number;
  }

  getMiniGameResult(input) {
    const gameType = typeChecker(input);
    const isMatched = this.#play(gameType, input);

    return { gameType, isMatched, gameNumber: this.#number };
  }

  #play(gameType, input) {
    if (gameType === "number") {
      return this.#isMatchedNumber(input);
    }

    if (gameType === "command") {
      return this.#isMatchedCommand(input);
    }
  }

  #isMatchedNumber(input) {
    return this.#number === Number(input);
  }

  #isMatchedCommand(input) {
    const isOddCommand = input === COMMAND.odd;

    if (this.#isOddNumber() && isOddCommand) {
      return true;
    }
    if (!this.#isOddNumber() && !isOddCommand) {
      return true;
    }

    return false;
  }

  #isOddNumber() {
    return this.#number % 2 === 1;
  }
}

module.exports = MiniGame;
