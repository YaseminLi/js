function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
    return value + '!!!'
}

asyncPrint('hello world', 1000).then((value) => {
    console.log(value);

})