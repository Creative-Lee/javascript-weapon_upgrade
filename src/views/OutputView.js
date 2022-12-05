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

  miniGameResult(gameType, isMatched, gameNumber) {
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

  upgradeResult(hasUpgraded, probabilty) {
    return `강화 ${hasUpgraded ? "성공" : "실패"}! (강화 확률 ${probabilty}%)`;
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
    Console.print(GAME_MSG.miniGameResult(gameType, isMatched, gameNumber));
  },

  printUpgradeResult(hasUpgraded, probabilty) {
    Console.print(GAME_MSG.upgradeResult(hasUpgraded, probabilty));
  },
};

module.exports = OutputView;
