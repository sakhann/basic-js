const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(input) {
// function dateSample(input) {
  if (!(typeof input === 'string')) return false;
  input = parseFloat(input);
  if(input > 15 || input <= 0 || !input) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/input)/k;
  return Math.ceil(t);
};
