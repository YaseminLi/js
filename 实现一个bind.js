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
Function.prototype.mybind=function (context) {
    let self=this
    return function () {
        return self.apply(context)
    }
}

let foo = {
    val: 1
};

function bar() {
    console.log(this.val);
}

let fn=bar.mybind(foo); 
fn()