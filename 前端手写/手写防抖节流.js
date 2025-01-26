// 防抖
// 定义：事件在一段时间后才会执行，如果再这段时间内再次调用该事件，则重新计时
// 具体步骤 1.设置规定时间内最后一次才触发 2.修复this的指向 3.传入原函数的参数 4.设置第三个参数（是否执行） 5.
function debounce(func, delay, immediate = false) {
  let timeout, result;
  let debounce = function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    if (immediate) {
      // 首次立即执行
      let callNow = timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args);
      }, delay);
    }
    return result;
  };
  debounce.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounce;
}
// 简单版
function debounce(fn, dealy) {
  let timer, result;
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, dealy);
  };
}
// 节流
// 类似于技能冷却，触发后需等待一段时间后才能再次触发

// 方案一 使用时间戳
function throttle(func, delay) {
  let oldTime = 0;
  return function () {
    let context = this;
    let args = arguments;
    let newTime = new Date().valueOf();
    if (newTime - oldTime > delay) {
      func.apply(context, args);
      oldTime = newTime;
    }
  };
}

// 方案2 使用定时器 第一次有效
function throttle2(func, dealy) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, dealy);
    }
  };
}


