//图片打点统计
//设置src属性的那一刻，发送了请求。
let img=new Image()
img.onload=img.onerror=function(){
    alert('done')
}
img.src='http://www.example/com?name=xiaoming'


function handleResponse(response) {
    console.log(response);
}
let script=document.createElement('script')
script.src='http://www.example/com/callback=response'
document.body.insertBefore(script,document.body.firstChild)
