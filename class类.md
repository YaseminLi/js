ES6之前，生成实例对象是通过构造函数。

ES6引入了class，通过class关键字来定义一个类，作为对象的模板；是一个语法糖，让对象原型的写法更像面对对象的语言。


## 构造函数

ES5构造函数写法：
```js
function People(name) {
    this.name=name
}
People.prototype.sayHi=function() {
    console.log(`My name is ${this.name}`);
     
}
let xiaoming=new People('xiaoming')
xiaoming.sayHi()//My name is xiaoming
```

##  class类

ES6写法：
```js
class People {
    constructor(name) {
	//new生成实例对象时，调用这个方法，默认return实例对象，也可以指定其他的
     this.name = name //this代表实例对象
    }
    sayHi(){
		//类中的方法相当于构造函数的People.prototype
        console.log(`My name is ${this.name}`);
    }
	sing(){
	        console.log('instance: I\'m singing')
	}
	
	//静态属性和方法，定义在类本身上，而不是类的实例或者原型对象上
	static sing(){
        console.log('static: I\'m singing')
    }
}

}
People.prototype.nationality='China'
let xiaoming=new People('xiaoming')
xiaoming.sayHi()//My name is xiaoming
typeof People //function
People===People.prototype.constructor //true
```

## 类的继承
```js
class Student extends People{
    constructor(name,grade){
		//super调用父类。子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。内部this指向子类实例， 返回子类实例
        super(name) 
        this.grade=grade //this指向子类实例
	      super.grade=grade.toUpperCase() //对实例属性赋值时，super指this,即子类的实例
    }
    introduce(){
        console.log(super.sayHi()+`   I'm a ${this.grade} student`)
	   console.log(super.name) //undefined 
	   console.log(super.nationality) //China
    }
	sing(){
        super.sing() //instance: I'm singing
    }
    static sing(){
	//调用父类本身的sing方法
        super.sing() //static: I'm singing
    }

}
let chenmei=new Student('chenmei','senior')
chenmei.introduce() //My name is chenmei   I'm a SENIOR student
```

## super的使用
1. 作为函数,只能在子类的构造函数中使用
```js
	class A {}
	class B extends A {
  constructor() {
    super();
  }
}
```

2. 作为对象
- 在普通方法中，指向父类的原型对象，所以实例上的属性或方法没办法获取

如上例Student的introdduce方法中，无法获取实例name属性，但原型对象上的nationality属性可。

- 对某个属性赋值时，指向this,即子类实例

- 在静态方法中，super指向父类本身；在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。
```js
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}
B.x = 3;
B.m() // 3
```		
		
##  原型链图    
<image src="./image/class-原型链图.png">

## 一些方法

- hasOwnproperty 验证是否是自身的属性
```js
	chenmei.hasOwnProperty('name') //true
	chenmei.hasOwnProperty('introduce') //false
```	
- A instanceof B A沿着原型链是否能找到B
```js
    chenmei instanceof People //true
```
