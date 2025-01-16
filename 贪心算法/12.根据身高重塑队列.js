/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let queue = [];
  // 先排序 身高降序 前面人的数量升序
  people.sort((a, b) => {
      if (a[0] !== b[0]) {
          return b[0] - a[0];
      } else {
          return a[1] - b[1];
      }
  })
  // 根据前面比他高的人的数量确定数组位置
  for (let i = 0; i < people.length; i++) {
      queue.splice(people[i][1], 0, people[i])
  }
  return queue
};