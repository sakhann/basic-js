module.exports = function countCats(input) {
  let catCount = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if(input[i][j] == '^^') catCount++;
    }
  }
  return catCount;
};
