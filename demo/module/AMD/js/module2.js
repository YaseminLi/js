define([
    'module1'
], function (module1) {
    let _msg_ = '7890';
    function con() {
        return module1.get() + _msg_;// 将两个字符串连接起来
    }
    return { con };
});