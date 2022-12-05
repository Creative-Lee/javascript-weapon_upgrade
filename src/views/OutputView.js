const { Console } = require("@woowacourse/mission-utils");

const GAME_MSG = Object.freeze({
  start: "무기 강화 게임을 시작합니다.",
  currentGrade(grade) {
    return `\n현재 강화 등급: +${grade}강`;
  },

  finalResult(grade) {
    return `\n최종 강화 결과: +${grade}강`;
  },
});

const OutputView = {
  printStartMsg() {
    Console.print(GAME_MSG.start);
  },

  printGrade(grade) {
    Console.print(GAME_MSG.currentGrade(grade));
  },

  printFinalResult(grade) {
    Console.print(GAME_MSG.finalResult(grade));
  },
};

module.exports = OutputView;
