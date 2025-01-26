// 浅拷贝
function shallowClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  return Object.assign({}, obj);
  // 或者扩展运算符
  return { ...obj };
}

// 深拷贝
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let newObj;
  if (Array.isArray(obj)) {
    obj = [];
  } else {
    obj = {};
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      obj[k] = deepClone(obj[k]);
    }
  }
}

// 深拷贝2 没有Function的情况
let newObj = JSON.parse(JSON.stringify(obj));

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let newObj;
  if (Array.isArray(obj)) {
    newObj = [];
    for (let i = 0; i < obj.length; i++) {
      newArray[i] = deepClone(obj[i]);
    }
    return newArray;
  } else {
    newObj = {};
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        newObj[k] = deepClone(obj[k]);
      }
    }
  }
  return newObj;
};
