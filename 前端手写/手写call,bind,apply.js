// call修改this指向 第2-n个参数是原函数的参数
Function.prototype.myCall = function(_this,...args){
  _this = _this === null || _this === undefined ? window : Object(_this)
  const key = new Symbol()
    // 此时this即为原函数 ，_this为原函数新增的this指向，那么就在_this下加一个属性，key是Symbol唯一值，val即为原函数。通过_this调用原函数及更改完成
  _this[key] = this;
  const result = _this.key(...args)
  return result 
}

Function.prototype.myApply = function(_this,args){
  _this = _this === null || _this === undefined ? window : Object(_this)
  const key = new Symbol()
  _this[key] = this;
  const result = _this[key](...args)
  return result 
}

// 与call类似但不立即执行
Function.prototype.myBind = function(_this,...args){
  const fn =this
  return function newFn(...subArgs){
    const allArgs = [...subArgs,...args]
    if(new.target){
      // 判断是否由new函数来调用的
      return new fn(...allArgs)
    }else {
      return fn.apply(_this,...allArgs)
    }
  }
}

