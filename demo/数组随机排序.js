//洗牌算法
let arr=[0,1,2,3,4,5,6]
function arrRandomSort(arr){
    for(let i=0;i<arr.length;i++){
        let index=Math.ceil(Math.random()*arr.length)
        let m=arr[index]
        arr[index]=arr[i]
        arr[i]=m
    }
    return arr
}
console.log(arrRandomSort(arr))