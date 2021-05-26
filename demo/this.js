let x=0;
let obj1={
    x:1,
    say:function () {
        console.log('say this',this);
        setTimeout(() => {
            console.log(this.x)//箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。
        }, 0);
    },
    hello:function () {
        console.log('hello this',this);
        setTimeout(function () {
            // () => {
            //     console.log(this)//箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。
            // }
            https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
            // 由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致，这些代码中包含的 this 关键字在非严格模式会指向 window (或全局)对象，严格模式下为 undefined，这和所期望的this的值是不一样的。
            console.log(this) 
        });
    }
}
obj1.say()//1
obj1.hello()//Timeout

// let obj2={
//     x:2
// }
// obj1.say.call(obj2) //2
// obj1.hello.call(obj2) //Timeout