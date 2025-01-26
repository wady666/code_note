const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (str) => {
  rl.on("line", (k) => {
    let left = 0,
      right = 0;
    const obj = {};
    while (right < str.length) {
      if (str[left] === str[right]) {
        right++;
      } else {
        if (obj[str[left]]) {
          obj[str[left]] = Math.max(obj[str[left]], right - left);
        } else {
          obj[str[left]] = right - left;
        }
        left = right;
      }
    }
    if (obj[str[left]]) {
      obj[str[left]] = Math.max(obj[str[left]], right - left);
    } else {
      obj[str[left]] = right - left;
    }
    const ans = Object.values(obj).sort((a, b) => b - a);
    console.log(ans[k - 1] ? ans[k - 1] : -1);
  });
});

function deepEqual(obj1, obj2) {
  if (typeof obj1!== typeof obj2) {
    return false;
  }
  if (typeof obj1 === "object" && obj1!== null && typeof obj2 === "object" && obj2!== null) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length!== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}

function deepClone(obj) {
  if (typeof obj!== 'object' || obj === null) {
    return obj; // 基本数据类型或 null 直接返回
  }

  if (Array.isArray(obj)) {
    let newArray = [];
    for (let i = 0; i < obj.length; i++) {
      newArray[i] = deepClone(obj[i]); // 递归复制数组元素
    }
    return newArray;
  }

  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]); // 递归复制对象属性
    }
  }
  return newObj;
}