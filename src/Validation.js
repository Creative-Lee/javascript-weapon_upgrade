const { COMMAND } = require("./constants/condition.js");

const ERROR_MSG = Object.freeze({
  invalidChallengeCommand:
    "[ERROR] 잘못된 도전 커멘드입니다. " +
    `(도전: ${COMMAND.challenge}, 중단: ${COMMAND.quit})을 입력해주세요`,
});

class Validation {
  static validateChallengeCommand(command) {
    const commands = [COMMAND.challenge, COMMAND.quit];

    if (!commands.includes(command)) {
      throw new Error(ERROR_MSG.invalidChallengeCommand);
    }
  }
}

module.exports = Validation;
