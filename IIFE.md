IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域，可防止全局命名空间被污染。

```js
(function(){
  'use strict';
 
  // Code goes here
 
}());
```


 ```js
//var的坑……
//js是单线程，i循环加到10后，才会去执行异步中的setTimeout
for (var i = 0; i < 2; i++) {
    setTimeout(function () { console.log(i) }, 100 * i
    )
}//10，10，10，10，10
 

//为什么加了立即执行函数就能捕获i？封闭作用域
for (var m = 0;m < 2; m++) {
    (function (j) {
        setTimeout(function () { console.log(j) }, 100 * j)
        )
    })(m)
}//0,1,2,3,4,5,6
```


这两段放一起执行，结果是：10，0，10，1，10，2，10，3，