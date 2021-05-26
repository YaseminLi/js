//实现promise

//简易功能
new Promise((reslove,reject)=>{
  if(success){
    reslove(msg)
  }else {
    reject(msg)
  }
}).then(
  (data) => { console.log(data)},
  (data) => { console.log(data)}
)


class MyPromise {
  // callback为传入的参数
  constructor(callback){
    this.success=null
    this.fail=null
    callback(
      success=>{
        // 成功 success对应res()传递的参数
        this.success=success
      },
      fail=>{
        // 失败 success对应rej()传递的参数
        this.fail=fail
      }
    )
    
    then(){

    }
  }
}


// 实现promise.all
// promises 传入的具有iterator接口的实例
// 1.空数组：同步执行，resolve[]
// 返回promise实例
// Promise.all=function(promises){
//   return new Promise((resolve,reject)=>{
//     let result=[]
//     if(promises.length===0){
//       resolve(result)
//     }
//   })
// }