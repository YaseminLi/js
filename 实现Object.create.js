//object.create,根据已有的对象，返回一个新的对象，并且已有对象为新对象的__proto__

//通过创建一个构造函数
function ObjectCreate(proto) {
    function F() { }
    F.prototype = proto
    return new F()
}

let obj = {
    name: 'xiaoming'
}
let newObj=ObjectCreate(obj)
console.log(newObj.__proto__);
