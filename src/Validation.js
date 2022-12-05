const { COMMAND } = require("./constants/condition.js");

const ERROR_MSG = Object.freeze({
  invalidChallengeCommand:
    "[ERROR] 잘못된 도전 커멘드입니다. " +
    `(도전: ${COMMAND.challenge}, 중단: ${COMMAND.quit})을 입력해주세요`,

  invalidMiniGameInputLength:
    "[ERROR] 잘못된 입력 길이입니다. 1자리의 숫자 또는 1글자의 커멘드를 입력해주세요",

  invalidMiniGameCommand:
    "[ERROR] 잘못된 미니 게임 커멘드입니다. " +
    `(홀수: ${COMMAND.odd}, 짝수: ${COMMAND.even})을 입력해주세요`,
});

class Validation {
  static validateChallengeCommand(command) {
    const commands = [COMMAND.challenge, COMMAND.quit];

    if (!commands.includes(command)) {
      throw new Error(ERROR_MSG.invalidChallengeCommand);
    }
  }

  static validateMiniGameInput(input) {
    const type = Validation.#typeChecker(input);
    const commands = [COMMAND.odd, COMMAND.even];

    if (!Validation.#isValidLength(input)) {
      throw new Error(ERROR_MSG.invalidMiniGameInputLength);
    }

    if (type === "string" && !commands.includes(input)) {
      throw new Error(ERROR_MSG.invalidMiniGameCommand);
    }
  }

  static #isValidLength(input) {
    return input.length === 1;
  }

  static #typeChecker(input) {
    if (Number.isInteger(parseInt(input))) {
      return "number";
    }

    return "string";
  }
}

module.exports = Validation;
