//返回一个函数
//可以传入多个
//教程：https://github.com/mqyqingfeng/Blog/issues/12

// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// // 返回了一个函数
// var bindFoo = bar.bind(foo); 

// bindFoo(); // 1
//第一版
// Function.prototype.mybind=function (context) {
//     let self=this
//     let args=Array.prototype.slice.call(arguments,1)
//     return function () {
//         args=args.concat(Array.prototype.slice.call(arguments))
//         return self.apply(context,args)
//     }
// }

// let foo = {
//     val: 1
// };

// function bar(name,age) {
//     console.log(this.val);
//     console.log(name);
//     console.log(age);
// }

// let fn=bar.mybind(foo,'xiaoming'); 
// fn(18) //1

//bind有构造函数的效果
Function.prototype.mybind = function (context) {
    //不是函数调用bind时报错
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
      }
    let self = this
    let args = Array.prototype.slice.call(arguments, 1)
    let fBound=function () {
        args = args.concat(Array.prototype.slice.call(arguments))
        //当作为构造函数使用时，这里的this指向实例，三元表达式中返回true,所以没有办法读取到context的属性值
        //不做构造函数时，this指向全局对象，返回false
        return self.apply(this instanceof fBound?this:context, args)
    }
    //可以获取到调用函数原型上的属性
    fBound.prototype=this.prototype
    return fBound
}
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);//shopping
console.log(obj.friend);//kevin