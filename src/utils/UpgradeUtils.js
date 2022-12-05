const { Random } = require("@woowacourse/mission-utils");

const UpgradeUtils = {
  PERCENTAGE: 100,
  MIN_INCLUSIVE_INDEX: 0,
  MAX_INCLUSIVE_INDEX: 99,

  getProbabilityTable(probability) {
    return Array.from({ length: UpgradeUtils.PERCENTAGE }, (_, idx) => {
      if (idx < probability) return true;

      return false;
    });
  },

  /**
   * @param {number} probability 강화 확률
   * @return {boolean} 강화 확률에 따른 강화 성공 여부 반환
   */
  isUpgraded(probability) {
    const probabilityTable = UpgradeUtils.getProbabilityTable(probability);

    const randomIndex = Random.pickNumberInRange(
      UpgradeUtils.MIN_INCLUSIVE_INDEX,
      UpgradeUtils.MAX_INCLUSIVE_INDEX
    );

    return probabilityTable[randomIndex];
  },
};

module.exports = UpgradeUtils;
