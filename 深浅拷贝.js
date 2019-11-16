//浅拷贝 
// let a={x:1,y:{z:2}}
// let b=Object.assign({},a)
// a.x=11
// a.y.z=22
// console.log(b);//{ x: 1, y: { z: 22 } }

//浅拷贝 
// let c={x:1,y:{z:2}}
// let d = Object.freeze(c);
// c.x = 11;
// c.y.z= 22;
// console.log(d); // { x: 1, y: { z: 22 } }

//浅拷贝 解构
// let e={x:1,y:{z:2}}
// let f = {...e};
// e.x = 11;
// e.y.z= 22;
// console.log(f);//{ x: 1, y: { z: 22 } }

// const x = {
//     a: function() {
//       console.log('aaa')
//     },
//     b: NaN,
//   }

//   const y = JSON.parse(JSON.stringify(x));
//   x.a=function () {
//     console.log('bbb');
//   }
//   console.log(y);//{ b: null }函数不能克隆会出错

//自己实现深克隆
//deepclone:传入原对象，返回新对象

function deepclone(oldObj) {
  //返回boolean，是否为期望的类型
  const isType = function (oldObj, type) {

    if (typeof oldObj !== 'object') {
      return false
    }
    let flag
    let typeString = Object.prototype.toString.call(oldObj)
    switch (type) {
      case 'Array':
        flag = typeString === '[object Array]';
        break;
      case 'Date':
        flag = typeString === '[object Date]';
        break;
      case 'RegExp':
        flag = typeString === '[object RegExp]';
        break;
      default:
        flag = false
    }
    return flag
  }
  //返回提取到的修饰符
  const getRegFlags = function (oldObj) {
    let flags = ''
    //如果有相应的修饰符，返回true
    if (oldObj.global) {
      flags += 'g'
    }
    if (oldObj.multiline) {
      flags += 'm'
    }
    if (oldObj.ignoreCase) {
      flags += 'i'
    }
    return flags
  }
  const _clone = function (obj) {
    //基础类型，直接返回传入的参数
    if (typeof obj !== 'object') {
      return obj
    }
    //以下是引用类型
    let newObj;//克隆来的新对象
    //为正则对象时
    if (isType(obj, 'RegExp')) {
      newObj = new RegExp(obj.source, getRegFlags(obj))
    } else if (isType(obj, 'Array')) {
      //为数组时
      newObj = []
    } else if (isType(obj, 'Date')) {
      //为Date时
      newObj = new Date(obj.getTime())
    } else {
      // 处理对象原型
      //获取原型对象
      proto = Object.getPrototypeOf(obj);
      // 利用Object.create切断原型链，方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
      newObj = Object.create(proto);
    }
    for (let key in obj) {
      newObj[key] = _clone(obj[key])
    }
    return newObj
  }
  return _clone(oldObj)
}

//测试用例

// //基础类型 ok
// let a=1
// let b=deepclone(a)
// a=4
// console.log(b);//1

// //正则对象
// let c=new RegExp('ab+c','im')
// let d=deepclone(c)
// console.log(d);

// //date ok
// let e=new Date()
// let f=deepclone(e)
// e.setFullYear(1994)
// console.log(f);

//array
// let g=[1,2,3,4]
// let h=deepclone(g)
// g.push(5)
// console.log(g);//1,2,3,4,5
// console.log(h);//1,2,3,4

//对象原型 ok
// function Person(name) {
//   this.name = name
// }

// Person.prototype.say = () => {
//   console.log(`my name is ${this.name}`);
// }
// let j=new Person('xiaoming')
// let i = deepclone(j)
// Person.prototype.say = () => {
//   console.log(`${this.name}`);
// }
// i.say() //my name is_

function person(pname) {
  this.name = pname;
}
person.prototype.say = () => {
  console.log(`my name is ${this.name}`);
}
const Messi = new person('Messi');

function say() {
  console.log('hi');
}
const array=[1,2,3,4,5]
const oldObj = {
  a: say,
  b:{g:1},
  c: new RegExp('ab+c', 'i'),
  d: Messi,
  e:array,
  f:new Date()
};


// oldObj.b = oldObj;
// console.log(oldObj);

const newObj = deepclone(oldObj);
oldObj.a=1
oldObj.b.g=2
oldObj.c=1
oldObj.e.push(6)
oldObj.f.setFullYear(1994)
person.prototype.say = () => {
  console.log(`${this.name}`);
}
oldObj.m=2
console.log(newObj,oldObj);
newObj.d.say()
// console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
// console.log(newObj.b, oldObj.b); 
// // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
// console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
// console.log(newObj.d.constructor, oldObj.d.constructor); 
// // [Function: person] [Function: person]








