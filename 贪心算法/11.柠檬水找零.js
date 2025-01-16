/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let f = 0;
  let t = 0;
  for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          f++
      }
      if (bills[i] === 10) {
          t++
          f--
      }
      if (bills[i] === 20) {
          if (t > 0) {
              t--
              f--
          } else {
              f = f - 3
          }
      }
      if (f < 0 || t < 0) {
          return false
      }
  }
  return true
};