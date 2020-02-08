//同call方法的实现
//教程：https://github.com/mqyqingfeng/Blog/issues/11
Function.prototype.myapply = function (context, arr) {
    context = context || window
    context.fn = this
    if (!arr) {
        context.fn()
    } else {
        context.fn(...arr)
    }
    delete context.fn
}
let val = 2
let foo = {
    val: 1
};

function bar(name, age) {
    console.log(this.val);
    console.log(name);
    console.log(age);
}

bar.myapply(foo, ['xiaoming', 16]); 