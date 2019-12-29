Function.prototype.bind=Function.prototype.bind||function(context){
let self=this
return function(){
    return self.apply(context,arguments)
}
}