const typeChecker = (input) => {
  if (Number.isInteger(parseInt(input))) {
    return "number";
  }

  return "command";
};

module.exports = typeChecker;
