//模拟new
//new 的作用
//1.创建一个新的对象
//2.新对象可以访问 oldObj和oldObj原型对象上的属性
//4.返回新的对象

function Person(name,age) {
    this.name=name;
    this.age = age;
    this.habit = 'Games';
}
Person.prototype.say=function () {
    console.log(`my name is ${this.name}`);
    
}
//new
// let boy=new Person('xiaoming')
// console.log(boy.name);//xiaoming
// boy.say()//my name is xiaoming

//模拟new,自己的简化版
// function objFactory(oldObj,...arg) {

//     let newObj=new Object()
//     newObj.__proto__ = oldObj.prototype
//     oldObj.apply(newObj,arg)//将this指向newObj
//     return newObj
// }

//完整范例
function objFactory() {
    console.log(arguments);
    
    var obj = new Object(), // new返回的是一个对象，所以定义一个对象，最后返回该对象
    Constructor = [].shift.call(arguments); // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。并且会改变原来数组的长度，  Constructor = Otaku构造函数
    console.log(Constructor);
    
    Constructor.apply(obj, arguments); // obj 有 Constructor（即Otaku构造函数）的属性， obj有了Otaku的执行环境， 此行并不能去掉
    console.log(obj instanceof Constructor); // false 此时还不是它的实例
    obj.__proto__ = Constructor.prototype; // obj 就继承了 Constructor.prototype（即Otaku构造函数）
    console.log(obj instanceof Constructor); // true  
    return obj; // 最后返回该对象：1. obj访问到Otaku构造函数里的属性; 2. obj访问到Otaku.prototype中的属性  实现了new功能
};
let person2=objFactory(Person,'dahong','25')
console.log(person2);
person2.say()
