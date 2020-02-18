function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}
const hw = helloWorldGenerator()
console.log(hw.next());//{ value: 'hello', done: false }
console.log(hw.next());//{ value: 'world', done: false }
console.log(hw.next());//{ value: 'ending', done: true }
console.log(hw.next());//{ value: undefined, done: true }

//没有yield，暂缓执行（next访问到时才执行）
function* f() {
    console.log('执行了！')
}

const generator = f();//没有执行

setTimeout(function () {
    generator.next()
}, 2000);
//2s后log出执行了

//yield表达式没有返回值
// next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1; }
    }
}

var g = f();
g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }

//通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

//如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。

// for...of 循环 § ⇧
// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5

console.log('_______');

function* gen(x){
    try {
      var y = yield x + 2;
    } catch (e){
      console.log(e);
    }
    return y;
  }
  
  var g = gen(1);
  console.log(g.next());
  g.throw('出错了');
  // 出错了