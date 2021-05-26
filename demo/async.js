
// function func(num) {
//     return function () {
//         console.log(num)
//     };
// }
// setTimeout(func(1));
// async function async3() {
//     await async4()
//     console.log(3)
// }
// async function async4() {
//     console.log(4)
// }
// async3()
// function func2() {
//     console.log(5);
//     async function async1() {
//         await async2();
//         console.log(6)
//     }
//     async function async2() {
//         console.log(7)
//     }
//     async1();
//     setTimeout(func(8))
// }
// setTimeout(func2);
// setTimeout(func(9));
// new Promise(resolve => {
//     console.log('Promise');
//     resolve()
// })
//     .then(() => console.log(10))
//     .then(() => console.log(11));
// console.log(12);

function foo(){
    for(var i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i);
        })
    }
}
foo()