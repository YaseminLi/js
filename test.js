
let a = 4
let obj = {
    a: 1,
    b: function () {
        let a = 2;
        console.log(this.a) //1
        f();
        function f() {
            let a = 3
            // console.log(this); //全局对象
            console.log(this.a) //undefines
        }
        let that = this;
        m();
        function m() {
            let a = 5
            console.log(that.a)//1
        }
    }
}
obj.b()
