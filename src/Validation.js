class Validation {
  static validateChallengeCommand(command) {
    const commands = ["Y", "N"];

    if (!commands.includes(command)) {
      throw new Error("[ERROR] 잘못된 도전 커멘드입니다. (도전: Y, 중단: N) 을 입력해주세요");
    }
  }
}

module.exports = Validation;
