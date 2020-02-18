//js 实现继承 ES5   class

//ES5
function People() {
    this.nation = "China";
}
People.prototype.say = function () {
    return 'hello';
}
People.gender = 'male'
function Student(grade) {
    this.grade = grade
}
Student.prototype.study = function () {
    return `I'm studying in ${this.grade} school`;
}
Student.teacher = 'Mr. Li'

//People和Student是两个类，有各自的属性和方法。
//现在需要实现一个extend方法，来实现Student对People的继承，即Student的实例有say()方法和gender属性

function extend(child, parent) {
    child.prototype.__proto__ = parent.prototype
}
// extend(Student,People)
// let xiaoming=new Student('senior')
// console.log(xiaoming.grade);//senior
// console.log(xiaoming.study());//I'm studying in senior school
// console.log(xiaoming.teacher);//undefined teacher是Student的自身属性，无法读取
// //检验是否实现了继承
// console.log(Student.gender);//undifined 
// console.log(xiaoming.say()); //hello 
// //没有继承实例属性


//继承分两部分：copy实例属性+延长原型链
function extend1(child, parent) {
    function extendStatics(child, parent) {
        //for……in 遍历可枚举属性，包括自身和原型链上的
        for (let key in parent) {
            //hasOwnProperty 自身是否有这个属性
            if(parent.hasOwnproperty(key)){
                child[key] = parent[key]
            }
        }
    }
    function extendPrototype(child, parent) {

    }
    //copy实例属性
    extendStatics(child, parent)
    //延长原型链
    extendPrototype(child, parent)
    // var extendStatics = function (d, b) {
    //     extendStatics = Object.setPrototypeOf ||
    //         ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    //         function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    //     return extendStatics(d, b);
    // };
    // extendStatics(d, b);
    // function __() { this.constructor = d; }
    // d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
let zhangwei = new Student('junior')
extend1(Student, People)
console.log('------copy实例属性后---------')
console.log(zhangwei.grade);//junior
console.log(zhangwei.study());//I'm studying in junior school
console.log(zhangwei.teacher);//undefined teacher是Student自身属性，无法读取
//检验是否实现了继承
console.log(Student.gender);//male
console.log(zhangwei.say()); //hello 