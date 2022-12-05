const MissionUtils = require("@woowacourse/mission-utils");
const { MINI_GAME_NUM } = require("../constants/condition.js");

const generateMiniGameNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    MINI_GAME_NUM.lowerInclusive,
    MINI_GAME_NUM.upperInclusive
  );
};

module.exports = generateMiniGameNumber;
