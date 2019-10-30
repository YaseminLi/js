// let count=0
// function fibonacci(n) {
//     count++
//     return n >= 2 ? fibonacci(n - 1) + fibonacci(n - 2) : n
// }
// for (let i = 0; i < 11; i++) {
//     console.log(fibonacci(i))
// }
// console.log(count);//一共调用了453  次


//如何避免重复运算？记住已经计算过的值
let count=0
let arr=[0,1]
function fibonacci(n) {
    let result=arr[n]
    if(typeof result !=='number'){
        count++
        result=fibonacci(n-1)+fibonacci(n-2)
        arr[n]=result
    }
    return result
}
for (let i = 0; i < 11; i++) {
    console.log(fibonacci(i))
}
// console.log(fibonacci(5))
console.log(count);
