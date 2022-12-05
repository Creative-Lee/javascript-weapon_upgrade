const MissionUtils = require("@woowacourse/mission-utils");

const MINI_GAME_NUM = {
  lowerInclusive: 0,
  upperInclusive: 9,
};

const generateMiniGameNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    MINI_GAME_NUM.lowerInclusive,
    MINI_GAME_NUM.upperInclusive
  );
};

module.exports = generateMiniGameNumber;
