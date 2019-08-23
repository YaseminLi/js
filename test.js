let rs = {
    h: ["id", "name"],
    d: [[100, "Tom"], [101, "Jane"], [102, "Tom"]]
};
let hash = rs2MultiHash(rs, "id");

function rs2MultiHash(obj, key) {
    let hash={}
    let arr = []
    let keys=rs.h
    rs.d.forEach(item => {
        let itemObj = {}
        itemObj[keys[0]]=item[0]
        itemObj[keys[1]]=item[1]
        arr.push(itemObj)
    })
    arr.forEach(item=>{
        let hashKey=item[key]
        if(!hash[hashKey]){
            hash[hashKey]=[item]
        }else{
            hash[hashKey].push(item)
        }
    })
    return hash
}

console.log(hash);

// 结果为
// hash = {
// 	"Tom": [{id: 100, name: "Tom"}, {id: 102, name: "Tom"}],
// 	"Jane": [{id: 101, name: "Jane"}]
// };