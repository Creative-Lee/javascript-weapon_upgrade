const InputView = require("./views/InputView.js");
const OutputView = require("./views/OutputView.js");

class GameController {
  start() {
    OutputView.printStartMsg();
  }
}

module.exports = GameController;
