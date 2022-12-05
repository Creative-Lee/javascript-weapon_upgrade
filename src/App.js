const GameController = require("./GameController.js");

class App {
  play() {
    new GameController().start();
  }
}

new App().play();

module.exports = App;
