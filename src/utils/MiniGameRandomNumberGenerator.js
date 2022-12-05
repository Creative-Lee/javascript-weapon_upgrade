const MissionUtils = require("@woowacourse/mission-utils");

const MiniGameRandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 9,
  generateMiniGameNumber() {
    return MissionUtils.Random.pickNumberInRange(
      MiniGameRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      MiniGameRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = MiniGameRandomNumberGenerator;
