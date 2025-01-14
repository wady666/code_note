/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] >=0 ) {
          return [map[target - nums[i]], i]
      }
      map[nums[i]] = i
  }
};

// 哈希表解法