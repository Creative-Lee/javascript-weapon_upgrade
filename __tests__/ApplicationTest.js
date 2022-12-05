const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join("");
};

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ["[ERROR]"]);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe("강화 게임 테스트", () => {
  test("게임 성공 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([2, 0, 4, 0]);
    mockQuestions(["Y", "E", "Y", "4", "N"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "홀/짝 맞추기 성공!",
      "강화 성공! (강화 확률 90%)",
      "숫자 맞추기 성공!",
      "강화 성공! (강화 확률 100%)",
      "최종 강화 결과: +2강",
    ]);
  });

  test("게임 실패 테스트", () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 99]);
    mockQuestions(["Y", "E"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      "홀/짝 맞추기 실패!",
      "강화 실패! (강화 확률 80%)",
      "최종 강화 결과: +0강",
    ]);
  });

  test("예외 테스트", () => {
    runException(["a"]);
  });
});
