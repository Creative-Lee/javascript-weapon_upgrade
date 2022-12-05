const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStartMsg() {
    Console.print("무기 강화 게임을 시작합니다.");
  },

  printGrade(grade) {
    Console.print(`\n현재 강화 등급: +${grade}강`);
  },
};

module.exports = OutputView;
