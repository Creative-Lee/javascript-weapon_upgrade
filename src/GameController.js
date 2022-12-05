const InputView = require("./views/InputView.js");
const OutputView = require("./views/OutputView.js");
const UpgradeGame = require("./UpgradeGame.js");
const Validation = require("./Validation.js");
const MiniGame = require("./MiniGame.js");
const tryCatchHandler = require("./utils/tryCatchHandler.js");
const generateMiniGameNumber = require("./utils/generateMiniGameNumber.js");
const { COMMAND } = require("./constants/condition.js");
const { Console } = require("@woowacourse/mission-utils");

class GameController {
  #upgradeGame;

  constructor() {
    const miniGame = new MiniGame();
    this.#upgradeGame = new UpgradeGame(miniGame);
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
      return;
    }

    if (command === COMMAND.challenge) {
      this.#miniGamePhase();
    }
  }

  #miniGamePhase() {
    const number = generateMiniGameNumber();
    this.#upgradeGame.initMiniGameNumber(number);

    this.#requestMiniGameInput();
  }

  #requestMiniGameInput() {
    InputView.readMiniGameInput((input) => {
      tryCatchHandler(
        () => this.#processMiniGame(input),
        () => this.#requestMiniGameInput()
      );
    });
  }

  #processMiniGame(input) {
    Validation.validateMiniGameInput(input);
  }

  #quit() {
    OutputView.printFinalResult(this.#upgradeGame.getGrade());

    Console.close();
  }
}

module.exports = GameController;
