function Foo() {
  getName = function () {
      console.log(1);
  };
  console.log('this is' + this)
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log('baidu' && 'google');
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

// 请写出以下的输出结果 
Foo.getName();   2
getName();  4
Foo().getName(); 1
getName(); 1
new Foo.getName();  'baidu' && 'google'
new Foo().getName(); 1
new new Foo().getName();
console.log('baidu' && 'google');
console.log('baidu' || 'google');
