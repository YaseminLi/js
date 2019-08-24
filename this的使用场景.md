this是什么？指代当前属性或方法所在对象,在函数执行时确定

### 纯粹函数调用：this指向window
```javascript
	var x=1;
	function test(){
	    console.log(this.x);
	}
	test();//1
```	
### 构造函数调用：this指向实例对象
```javascript
	function test(){
	this.x=1
	}
	var obj=new test();
	console.log(obj.x);//1
```	
### 对象的属性方法中：
	如果对象的方法里面包含this，this的指向就是方法运行时所在的对象。该方法赋值给另一个对象，就会改变this的指向。
```javascript
	var obj ={
  foo: function () {
    console.log(this);
  }
};
	obj.foo() // obj，foo方法运行在obj对象上，所以this指obj对象
```	
	this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。
```javascript
	var a = {
  p: 'Hello',
  b: {
    m: function() {
      console.log(this.p);
    }
  }
};
	a.b.m() // undefined，当前一层对象为a.b{m……}，没有p属性
```	
	
### apply、call、bind调用
	改变函数的调用对象，第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数。
```javascript
	var x = 0;
	function test() {
	console.log(this.x);
	}
	
	var obj = {};
	obj.x = 1;
	obj.m = test;
	
	var bar={
	x:2
	}
	obj.m.apply();//0
	obj.m.apply(obj);//1
	obj.m.apply(bar);//2
```	
### 箭头函数可以保留函数创建时的this,而不是函数调用时的this值 (ts imooc 3-19)
