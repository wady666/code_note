/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let curSum = 0
  let sum = 0
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
      sum += gas[i] - cost[i];
      curSum += gas[i] - cost[i];
      if(curSum < 0){
          start = i+1
          curSum = 0
      }
  }
  if (sum < 0) {
      return -1
  } else {
      return start
  }
};
// 局部最优 => 消耗差累加若小于0 则这之前都不是开始指针