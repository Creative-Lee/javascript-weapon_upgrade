const MissionUtils = require("@woowacourse/mission-utils");

const INCLUSIVE_NUM = {
  LOWER: 0,
  UPPER: 9,
};

const generateMiniGameNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    INCLUSIVE_NUM.LOWER,
    INCLUSIVE_NUM.UPPER
  );
};

module.exports = generateMiniGameNumber;
