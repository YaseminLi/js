function debounce(fn,delay){
  // n秒执行一次，再次执行重新计时
  let timer=null
  return function(){
    if(timer){
      clearTimeout(timer)
    }else {
      timer=setTimeout(() => {
          fn()
      }, delay);
    }
  }
}


function throttle(fn,time){
  let timer=new Date().getTime()
  return function(){
    const now=new Date().getTime()
    if(now-timer>=time*1000){
      fn()
      timer=new Date().getTime()
    }
  }
}