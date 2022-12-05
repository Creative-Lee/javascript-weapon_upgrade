const InputView = require("./views/InputView.js");
const OutputView = require("./views/OutputView.js");
const UpgradeGame = require("./UpgradeGame.js");
const Validation = require("./Validation.js");

class GameController {
  #upgradeGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
  }

  start() {
    OutputView.printStartMsg();
    OutputView.printGrade(this.#upgradeGame.getGrade());

    this.#requestChallengeCommand();
  }

  #requestChallengeCommand() {
    InputView.readChallengeCommand(this.#runChallengeCommand.bind(this));
  }

  #runChallengeCommand(command) {
    Validation.validateChallengeCommand(command);
  }
}

module.exports = GameController;
