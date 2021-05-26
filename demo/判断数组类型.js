function isArray(arg){
  if(Array.isArray){
    return Array.isArray(arg)
  }else {
    return Object.prototype.toString.call(arg)==='[object Array]'
  }
}