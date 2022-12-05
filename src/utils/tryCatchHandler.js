const { Console } = require("@woowacourse/mission-utils");

/**
 * @param {function} excution  실행할 함수
 * @param {function} reRequest 실패 시 실행 할 입력 요청 함수
 */
const tryCatchHandler = (excution, reRequest) => {
  try {
    excution();
  } catch ({ message }) {
    Console.print(message);
    reRequest();
  }
};

module.exports = tryCatchHandler;
