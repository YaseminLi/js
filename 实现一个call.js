//call的作用
//显示绑定this,指定调用该函数的对象（函数变成该对象的属性）传入参数,并执行函数
//传入null的时候 this指向window

// var foo = {
//     value: 1
// };

// function bar() {
//     console.log(this.value);
// }

// bar.call(foo); // 1

//步骤
//1.将函数设为对象的属性
//2.执行该函数
//3.删除该函数
Function.prototype.mycall = function (context) {
    context = context || window;
    context.fn = this;
    let args = [];
    for (let i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }
    context.fn(...args);
    // let result = context.fn(...args);
    delete context.fn;
    // return result;
}
let val = 2
let foo = {
    val: 1
};

function bar(name) {
    console.log(this.val);
    console.log(name);
}

bar.mycall(foo,'xiaoming'); // 1