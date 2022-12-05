const { Console } = require("@woowacourse/mission-utils");
const { INCREASE_PROBABILITY } = require("../constants/condition.js");

const GAME_MSG = Object.freeze({
  start: "무기 강화 게임을 시작합니다.",
  currentGrade(grade) {
    return `\n현재 강화 등급: +${grade}강`;
  },

  finalResult(grade) {
    return `\n최종 강화 결과: +${grade}강`;
  },

  MiniGameResult(gameType, isMatched, gameNumber) {
    const gameTypeTitle = gameType === "number" ? "숫자" : "홀/짝";
    const increasedProbabilityTemplate = isMatched
      ? `강화 확률 ${INCREASE_PROBABILITY[gameType]}% 증가!`
      : "";

    return (
      `미니 게임 랜덤 수: ${gameNumber} --> ${gameTypeTitle} ` +
      `맞추기 ${isMatched ? "성공" : "실패"}! ` +
      increasedProbabilityTemplate
    );
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

  printMiniGameResult({ gameType, isMatched, gameNumber }) {
    Console.print(GAME_MSG.MiniGameResult(gameType, isMatched, gameNumber));
  },
};

module.exports = OutputView;
