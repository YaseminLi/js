//instanceof 可以用instance判断a是否为b的构造函数
//person1 insatnceof Person   //true
//a和b需要满足什么条件才能证明a是b的构造函数呢？
//根据那个构造函数、实例、原型对象之间的关系图，a.prototype==原型对象==b.__proto__

function instanceOf(a, b) {
    while (b&&b.__proto__ !== Object) {
        if (a.prototype === b.__proto__) {
            return true
        } else {
            b = b.__proto__
        }
    }
    return false
}

function Person(name){
        this.name=name
}
let person1=new Person('xiaoming')
let person2=new Person('dahong')

console.log(instanceOf(Person,person1));
console.log(instanceOf(person2,person1));
