function isFirstLoad() {
    let idList = []
    return function (id) {
        if (idList.indexOf(id) > -1) {
            return false
        } else {
            idList.push(id)
            return true
        }
    }
}

let firstLoad=isFirstLoad()
console.log(firstLoad(10));//true
console.log(firstLoad(10));//false
console.log(firstLoad(20));//true
console.log(firstLoad(20));//false
