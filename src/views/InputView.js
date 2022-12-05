const { Console } = require("@woowacourse/mission-utils");

const InputView = {
  // 강화 도전 여부
  readUpgradeCommand(callback) {
    Console.readLine("", callback);
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput() {},
};

module.exports = InputView;
