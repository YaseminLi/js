
require.config({
    baseUrl: 'js',
    paths: {
        module1: 'module1',
        module2: 'module2'
    },
});
require(['module2'], function (module2) {
    console.log('main');
    console.log(module2.con());
})

