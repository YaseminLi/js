//ES5
// function People(name) {
//     this.name=name
// }
// People.prototype.sayHi=function() {
//     console.log(`My name is ${this.name}`);

// }
// let xiaoming=new People('xiaoming')
// xiaoming.sayHi()//My name is xiaoming


//ES6
class People {
    constructor(name) {
        this.name = name
    }
    
    sayHi(){
        let result=`My name is ${this.name}`
        console.log(result);
        return result
    }
    sing(){
        console.log('instance: I\'m singing')
    }
   //静态属性和方法，定义在类本身上，而不是类的实例或者原型对象上
    static sing(){
        console.log('static: I\'m singing')
    }
}
People.prototype.nationality='China'
let xiaoming=new People('xiaoming')
xiaoming.sayHi()//My name is xiaoming
console.log(typeof People)//function
console.log( People===People.prototype.constructor)//true

//类的继承
class Student extends People{
    constructor(name,grade){
        super(name)
        this.grade=grade
        super.grade=grade.toUpperCase() //对实例属性赋值时，super指this,即子类的实例
    }
    introduce(){
        console.log(super.sayHi()+`   I'm a ${this.grade} student`)
        console.log(super.name)
        console.log(super.nationality) //China
    }
    sing(){
        super.sing()
    }
    static sing(){
        super.sing()
    }
}
let chenmei=new Student('chenmei','senior')
chenmei.introduce() //My name is chenmei   I'm a senior student
chenmei.sing()
Student.sing()