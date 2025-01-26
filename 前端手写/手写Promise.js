// Promise有的属性 PromiseState: pending | fulfilled | rejected ;PromiseResult
// Promise有的构造方法：resolve reject then catch all race finally
// 只能从pending 变为 fulfilled/rejected
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class myPromise {
  PromiseState = PENDING;
  PromiseResult = undefined;
  fulfiiledCbs = [];
  rejectedCbs = [];
  constructor(executor) {
    // 构造函数立即执行
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(val) {
    if (this.PromiseState !== PENDING) {
      return;
    }
    this.PromiseState = FULFILLED;
    this.PromiseResult = val;
    while (this.fulfiiledCbs.length) {
      this.fulfiiledCbs.shift()();
    }
  }
  reject(reason) {
    if (this.PromiseState !== PENDING) {
      return;
    }
    this.PromiseState = REJECTED;
    this.PromiseResult = reason;
    while (this.rejectedCbs.length) {
      this.rejectedCbs.shift()();
    }
  }
  // then方法接受两个参数 如果FULFILLED执行第一个 如果REJECTED执行第二个 如果是PENDING则保存回调 不执行
  // then方法本身会返回一个新的Promise对象
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onResolved === "function" ? onResolved : (value) => value;
    // 如果onRejected是函数，则直接使用，否则默认为抛出异常的函数
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    const newPromise = new myPromise((resolve, reject) => {
      if (this.PromiseState === FULFILLED) {
        try {
          const x = onFulfilled(this.PromiseResult);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      } else if (this.PromiseState === REJECTED) {
        try {
          const x = onRejected(this.PromiseResult);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      } else if (this.PromiseState === PENDING) {
        this.fulfiiledCbs.push(() => {
          if (this.PromiseState === FULFILLED) {
            try {
              const x = onFulfilled(this.PromiseResult);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          }
        });
        this.rejectedCbs.push(() => {
          if (this.PromiseState === REJECTED) {
            try {
              const x = onRejected(this.PromiseResult);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          }
        });
      }
    });
    return newPromise
  }
}
