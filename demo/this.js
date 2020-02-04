let x=0;
let obj1={
    x:1,
    say:function () {
        setTimeout(() => {
            console.log(this.x)
        }, 0);
    },
    hello:function () {
        setTimeout(function () {
            console.log(this)
        });
    }
}
obj1.say()//1
obj1.hello()//Timeout

let obj2={
    x:2
}
obj1.say.call(obj2) //2
obj1.hello.call(obj2) //Timeout