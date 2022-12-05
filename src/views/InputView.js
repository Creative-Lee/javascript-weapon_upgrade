const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("../constants/condition.js");

const REQUEST_MSG = Object.freeze({
  challenge: `강화 도전 여부를 입력해주세요. (도전: ${COMMAND.challenge}, 중단: ${COMMAND.quit})\n`,
});

const InputView = {
  readChallengeCommand(callback) {
    Console.readLine(REQUEST_MSG.challenge, callback);
  },

  readMiniGameInput() {},
};

module.exports = InputView;
