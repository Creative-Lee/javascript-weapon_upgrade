const { Random } = require("@woowacourse/mission-utils");

const UpgradeUtils = {
  PERCENTAGE: 100,
  MIN_INCLUSIVE_INDEX: 0,
  MAX_INCLUSIVE_INDEX: 99,

  generateProbabilityTable(probability) {
    return Array.from({ length: UpgradeUtils.PERCENTAGE }, (_, idx) => {
      if (idx < probability) return true;
      return false;
    });
  },

  isUpgraded(probability) {
    const probabilityTable = UpgradeUtils.generateProbabilityTable(probability);

    const randomIndex = Random.pickNumberInRange(
      UpgradeUtils.MIN_INCLUSIVE_INDEX,
      UpgradeUtils.MAX_INCLUSIVE_INDEX
    );

    return probabilityTable[randomIndex];
  },
};

module.exports = UpgradeUtils;
