// // 找出数组中最大/最小数

// 'use strict'
// // apply
// const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// //call
// const min = Math.min.call(null, ...numbers)
// console.log(max, min);//7 2


// // 将数组添加到另一个数组：
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// arr1.push(arr3);//直接push会将数组当作单个元素添加
// console.log(arr1);//[ 1, 2, 3, [ 7, 8, 9 ] ]
// Array.prototype.push.apply(arr2, arr3);
// console.log(arr2);//[ 4, 5, 6, 7, 8, 9 ]

// // 实现一个call
// //步骤
// //1.将函数设为对象的属性
// //2.执行该函数
// //3.删除该函数
// Function.prototype.mycall = function (context) {
//   context = context || window;
//   context.fn = this;
//   let result = context.fn(...[...arguments].slice(1));
//   delete context.fn; //不删除的话，context上会增加fn属性
//   return result;
// }
// // let val = 2
// // let foo = {
// //   val: 1
// // };

// // function bar (name) {
// //   console.log(this.val);
// //   console.log(name);
// // }

// // bar.mycall(foo, 'xiaoming'); // 1,xiaoming，
// // console.log(foo);//{ val: 1 }

// console.log('实现一个apply------------------');
// // 实现一个apply
// // 步骤：
// // 1. 将函数设为对象的属性
// // 2. 执行该函数
// // 3. 删除该属性

// Function.prototype.myApply = function (context) {
//   context = context || window
//   context.fn = this
//   console.log(context, arguments);
//   const result = context.fn(...[...arguments].slice(1))
//   delete context.fn
//   return result
// }

// let val1 = 2
// let foo1 = {
//   val1: 1
// };

// function bar1 (name) {
//   console.log(this.val1);
//   console.log(name);
// }

// bar1.myApply(foo1, ['xiaoming', 'hahha']); // 1,xiaoming，
// console.log(foo1);//{ val: 1 }


console.log('实现一个bind------------------');
// 实现bind
// bound = A.mybind(b)
Function.prototype.myBind = function () {

  if (typeof this !== 'function') {
    throw new TypeError(this + 'must be a function');
  }
  var slice = Array.prototype.slice;
  const toBind = this // A
  const bindArg = arguments[0]; // b
  const args = [...arguments].slice(1) // 除了b的参数

  var bound = function () {
    var funcArgs = args.concat(slice.call(arguments)) // 除了b的参数 + bound的参数
    return toBind.apply(bound.prototype.isPrototypeOf(this) ? this : bindArg, funcArgs); // 
  };
  bound.prototype = toBind.prototype
  return bound
}

function Bar () {
  this.habit = 'shopping'
}

console.log(new Bar());// o = create(); o.__proto__ = Bar.prototype; Bar.apply(o); return o
// console.log(Bar())
const b = { b: 1 }
const barBound = Bar.myBind(b)
console.log(new barBound())
// console.log(b)








// var value = 2;

// var foo = {
//   value: 1
// };

// function bar (name, age) {
//   this.habit = 'shopping';
//   console.log(this.value);
//   console.log(name);
//   console.log(age);
// }

// bar.prototype.friend = 'kevin';
// var bindFoo = bar.bind(foo, 'daisy');
// var obj = new bindFoo('18');
// // undefined
// // daisy
// // 18
// console.log(obj.habit);//shopping
// console.log(obj.friend);//kevin

