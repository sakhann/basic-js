module.exports = class DepthCalculator {
  calculateDepth(arr, maxDeep = 1) {
    if (!Array.isArray(arr)) return 1;
    for (const item of arr) {
      if (Array.isArray(item)){
        maxDeep = Math.max(this.calculateDepth(item)+1, maxDeep);
      }
    }
    return maxDeep;
  }
};
