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
  #miniGame;

  constructor() {
    this.#upgradeGame = new UpgradeGame();
    this.#miniGame = new MiniGame();
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
    this.#miniGame.setNumber(number);

    this.#requestMiniGameInput();
  }

  #requestMiniGameInput() {
    InputView.readMiniGameInput((input) => {
      tryCatchHandler(
        () => this.#playMiniGame(input),
        () => this.#requestMiniGameInput()
      );
    });
  }

  #playMiniGame(input) {
    Validation.validateMiniGameInput(input);

    const miniGameResult = this.#miniGame.getMiniGameResult(input);

    OutputView.printMiniGameResult(miniGameResult);
  }

  #quit() {
    OutputView.printFinalResult(this.#upgradeGame.getGrade());

    Console.close();
  }
}

module.exports = GameController;
