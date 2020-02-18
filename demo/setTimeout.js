
var num = 0;
function Obj() {
    this.num = 1,
        this.getNum = function () {
            console.log(this.num);
        },
        this.getNumLater = function () {
            setTimeout(() => {
                console.log(this)//箭头函数中的this总是指向外层调用者，也就是Obj
                console.log(this.num);//1
            }, 1000)    
            setTimeout(function(){
                console.log(this) //指向全局对象
                console.log(this.num);//undefined
            }, 1000) 
        }

}
var obj = new Obj;
obj.getNum();//1　　打印的是obj.num，值为1