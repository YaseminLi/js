
function Elem(id) {
    this.elem = document.getElementById(id)
}
Elem.prototype.html = function (string) {
    let div = this.elem
    div.innerHTML = string
    console.log(div);
    return this
}
Elem.prototype.on = function () {
    let div=this.elem
    div.addEventListener('click',handleCLick) //继承父类的addEventListener方法
    return this
}
function handleCLick(){
    alert('CLick')
}
let div1 = new Elem('head')
div1.html('<p>hello</p>').on().html('<p>world</p>')