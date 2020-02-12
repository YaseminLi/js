for (var i = 0; i < 2; i++) {
    setTimeout(function () { console.log(i) }, 100 * i
    )
}//10，10，10，10，10


for (var m = 0; m < 2; m++) {
    (function (j) {
        setTimeout(function () { console.log('立即执行setTimeout:' + j) }, 100 * j);
        console.log('立即执行'+j)
    })(m)
}//0,1,2,3,4,5,6