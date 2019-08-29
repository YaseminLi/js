var point = {
    x: 0,
    y: 0,
    z: 0,
    moveTo: function (x, y, z) {
        // 内部函数
        var moveX = function (x) {
            this.x = x;//this 绑定到了哪里？
        };
        // 内部函数
        var moveY = function (y) {
            this.y = y;//this 绑定到了哪里？
        };
        let moveZ = (z) => { this.z = z }//1，绑定到了point上
        moveX(x);
        moveY(y);
        moveZ(z);
    }
};
point.moveTo(1, 1, 1);
console.log(point.x);//0
console.log(point.y);//0
console.log(point.z);//1
console.log(x);//1
console.log(y);//1
console.log(z);//undefined

// 	point.x; //==>0 
// 	point.y; //==>0 
// 	x; //==>1 
// y; //==>1