const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("../constants/condition.js");

const REQUEST_MSG = Object.freeze({
  challenge: `강화 도전 여부를 입력해주세요. (도전: ${COMMAND.challenge}, 중단: ${COMMAND.quit})\n`,
  minigame:
    `\n미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요.` +
    `(숫자: 0 ~ 9 사이의 수, 홀: O, 짝: E)\n`,
});

const InputView = {
  readChallengeCommand(callback) {
    Console.readLine(REQUEST_MSG.challenge, callback);
  },

  readMiniGameInput(callback) {
    Console.readLine(REQUEST_MSG.minigame, callback);
  },
};

module.exports = InputView;
