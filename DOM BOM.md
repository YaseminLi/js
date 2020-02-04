## web-API 
w3c中的标准
1. DOM操作
2. BOM操作
3. 事件
4. ajax请求（http协议）
5. 存储

## DOM的本质
document object model-浏览器将html代码结构化为一个浏览器能识别、js能操作的模型，类似于树

## DOM节点操作
```html
<body>
    <div id='div1' class="class-div1">
        <p id='p1' data-name='p1-data-name'>this is p1</p>
        <p id='p2' >this is p2</p>
    </div>
    <div id='div2' >
        <p id='p3'>this is p3</p>
        <p id='p4' >this is p4</p>
    </div>
</body>
```
1. 获取DOM节点
	- 获取body ```let body=document.body```
	- 指定id ```document.getElementById('div1')```  得到单个节点
	- 指定class ```document.getElementsByClassName('class-div1')```  得到节点的集合（数组形式）
	- 指定标签名 ```document.getElementsByTagName('p')```   得到节点的集合（获取到的是一个类数组对象，需要用数组的slice方法call一下，它才可以用数组的原型方法。）
	- 指定选择器 ```document.querySelectorAll```(一个或多个css选择器)
		
2. property

dom元素作为js对象的属性，如节点的style属性，不会体现在html结构中，优先用这个，性能快
	
3. attribute

attribute 是 dom 元素在文档中作为 html 标签拥有的属性，会体现在html结构中

如 data-name ```<p id="p1" data-name="p1-data-name">```,是文档标签里的属性

```let p=document.getElementsByTagName('p') ```

设置属性：```p.setAttribute('data-name',"p1-data-name")```

获取属性：```p.getAttribute('data-name')```
	
## DOM结构操作
1. 增加节点
```js
	let p5=document.createElement('p')
	p5.innerHTML='new p'
	let div1=document.getElementById('div1')
	div1.appendChild(p5)
```

```html
	<div id="div1" class="class-div1">
	        <p id="p1" data-name="p1-data-name">this is p1</p>
	        <p id="p2">this is p2</p>
	        <p>new p</p>
	</div>
	<div id="div2">
	        <p id="p3">this is p3</p>
	        <p id="p4">this is p4</p>
	</div>
```

2. 移动节点(和增加节点的区别)
```js
	let div2=document.getElementById('div2')
	div2.appendChild(p5)
```

```html
	<div id="div1" class="class-div1">
	        <p id="p1" data-name="p1-data-name">this is p1</p>
	        <p id="p2">this is p2</p>   
	</div>
	<div id="div2">
	        <p id="p3">this is p3</p>
	        <p id="p4">this is p4</p>
	        <p>new p</p>
	</div>
```	
3. 获取父元素节点

```p5.parentNode===p5.parentElement ``` 
	
4. 获取子元素节点

```div2.children```  数组，不包含换行产生的text

```div2.childNodes```   数组，包含换行产生的text
	
5. 删除节点

删除子节点 ```div2.removeChild(p5)```
删除本身节点 ```div2.remove()```
	
	
## BOM
浏览器对象模型，提供window、location、navigator等对象来访问浏览器的功能
1. navigitor浏览器属性

检测浏览器类型：
```js
let ua=navigator.userAgent "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
let isChrome=ua.indexOf('Chrome')
```

2. screen 客户端显示屏幕信息

screen.width 显示器宽度

3. location 地址

https://coding.imooc.com/lesson/115.html#mid=5390

- 完整URl ```location.href```     "https://coding.imooc.com/lesson/115.html#mid=5390"
- 协议 ```location.protocol```  "https:"
- 服务器名称和端口号```location.host```  "coding.imooc.com"
- 目录或文件名```location.pathname``` "/lesson/115.html"
- 查询字符串，问号开头```location.search``` ""
- #后面的 ```location.hash``` "#mid=5390"
- 改变地址可以直接```location.href=^```
	
4. history 历史

```history.back()``` 后退一步

```history.forward()```前进一步
