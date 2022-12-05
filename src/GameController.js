const InputView = require("./views/InputView.js");
const OutputView = require("./views/OutputView.js");
const UpgradeGame = require("./UpgradeGame.js");
const Validation = require("./Validation.js");
const tryCatchHandler = require("./utils/tryCatchHandler.js");
const { COMMAND } = require("./constants/condition.js");
const { Console } = require("@woowacourse/mission-utils");

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
    InputView.readChallengeCommand((command) => {
      tryCatchHandler(
        () => this.#runChallengeCommand(command),
        () => this.#requestChallengeCommand()
      );
    });
  }

  #runChallengeCommand(command) {
    Validation.validateChallengeCommand(command);

    if (command === COMMAND.quit) {
      this.#quit();
    }
  }

  #quit() {
    OutputView.printFinalResult(this.#upgradeGame.getGrade());

    Console.close();
  }
}

module.exports = GameController;
