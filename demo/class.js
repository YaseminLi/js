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
}
let xiaoming=new People('xiaoming')
xiaoming.sayHi()//My name is xiaoming
console.log(typeof People)//function
console.log( People===People.prototype.constructor)//true

//类的继承
class Student extends People{
    constructor(name,grade){
        super(name)
        this.grade=grade
    }
    introduce(){
        console.log(super.sayHi()+`   I'm a ${this.grade} student`)
    }
}
let chenmei=new Student('chenmei','senior')
chenmei.introduce()