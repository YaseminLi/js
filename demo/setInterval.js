function counter(time,maxCount){
    let timer=null
    let count=0
    timer=setInterval(() => {
      console.log(count);
      count+=1
      if(count>maxCount){
        clearTimeout(timer)
      }
    }, time);
}

counter(1000,10)