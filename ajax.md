## AJAX技术
- 没有ajax，要更新内容时，需要刷新整个页面。
- 异步的js+xml，是一种通信技术，向服务器请求额外的数据而不用卸载页面。xml是用来打包信息，json比较常用。
- 核心是XHR对象。使用XHR对象获取新数据，再通过DOM将数据插入到页面中。

## XHR
1. 初始化一个XHR对象
    
    ```let xhr=new XMLHttpRequest()```

2. 判断浏览器是否支持
    ```js
	if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            let  xmlhttp=new XMLHttpRequest();
        }
        else
            {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    ```
3. xhr.readyState
		
		值	状态	描述
		0	UNSENT	代理被创建，但尚未调用 open() 方法。
		1	OPENED	open() 方法已经被调用,未调用send()
		2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得,尚未接收到响应
		3	LOADING	下载中； responseText 属性已经包含部分数据。
		4	DONE	下载操作已完成。

4. xhr.status状态码说明

		值	描述
		0	请求未完成或者xhr出错
		2xx	成功处理请求
		3xx	需要重定向，浏览器直接跳转
		4xx	客户端请求错误
		5xx	服务器端错误
	
## 跨域
1. 为什么会出现跨域

- 浏览器有同源策略，不允许用ajax访问其它域接口
- 跨域条件：协议，域名，端口：8080，有一个不同就算跨域
		
2. 解决跨域的原理

跨域问题是针对ajax的，html本身没有跨域问题，比如a标签、script标签、link标签等 ，凡是拥有”src”这个属性的标签都拥有跨域的能力。
		
3. 可跨域标签的使用场景：
- ```<img />```用于打点统计，统计网站可能是其它域
- ```<link />```可以使用CDN,CDN是其它域
- ```<script >```可以用于jsonp
		
例子打点统计：

页面中有一个『关注』按钮，用户可以点击。此时你的产品经理想要看下，每天有多少个用户点击这个按钮，你怎么做？

需要在按钮点击之后，向服务器端发送一些东西，告诉服务器有一次点击行为，对吧。那么如何发送呢，直接可以用 JS 生成一个 img 标签，然后 ```img.src = 'https://xxx.com/api/click?event=guanzhu'```，这样你的服务端收到这条消息之后，就可以知道这次点击行为了。服务端知道了每次点击行为，就可以统计出一天所有的点击行为
		
4. 实现跨域的方法
- cors跨域源资源共享

发送的请求头部附加一个额外的HTTP头部信息，服务器根据这个信息来决定是否给予响应

- 图片ping

常用于跟踪用户点击页面、计算点击次数、动态广告曝光次数。
			
缺点：只能发送get请求；无法访问服务器的响应文本；单向通信

```js
//设置src属性的那一刻，发送了请求。
let img=new Image()
img.onload=img.onerror=function(){
	alert('done')
//只要请求完成就能得到通知，可以知道响应是什么时候接收到的
}
img.src='http://www.example/com?name=xiaoming'

```	
- jsonp

## jsonp 
json with padding

1. 原理

JSONP利用了script标签无同源限制的特点来实现的，当向第三方站点请求时，将请求放在```<script>```标签的src属性里，这就如同我们请求一个普通的JS脚本，可以自由的向不同的站点请求。

在script 标签里面给服务器端传递一个 callback，callback 的值对应到页面一定要定义一个全局函数（为什么是全局？因为服务端接收到callback函数后会返回页面中的script中去找，如果不写在全局作用域中根本找不到）
			
2. 实现：
```js
			function handleResponse(response) {
				console.log(response);
			}
			let script=document.createElement('script')
			script.src='http://www.example/com/callback=handleResponse'
			document.body.insertBefore(script,document.body.firstChild)
```			
拓展：[jsonp原理详解——终于搞清楚jsonp是啥](https://blog.csdn.net/hansexploration/article/details/80314948)
			
官方文档：[github](https://github.com/webmodules/jsonp)
			
3. 使用
			
- 安装： ```npm install jsonp```
				
- API
```js
				jsonp(url, opts, fn)
					• url (String) 要请求的URL
					• opts (Object), optional
						○ param (String) name of the query string parameter to specify the callback (defaults to callback)
						○ timeout (Number) how long after a timeout error is emitted. 0 to disable (defaults to 60000)
						○ prefix (String) prefix for the global callback functions that handle jsonp responses (defaults to __jp)
						○ name (String) name of the global callback functions that handle jsonp responses (defaults to prefix + incremented counter)
					• fn callback：一般不用回调，promise封装

				import originJSONP from 'jsonp'
				
				new Promise((resolve,reject)=>{
				        originJSONP(url,option,(err,data)=>{
				            if(!err){
				                resolve(data)
				            }else{
				                reject(err)
				            }
				        })
				    })
```			
			
- 实例（music-vue项目）
			
    - 封装/src/js/jsonp.js
	```js
				import originJSONP from 'jsonp'
				 
				// url:https://music.163.com/#/playlist
				//data:{id:2850578667}
				
				export default function jsonp(url, data, option) {
				    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
				    return new Promise((resolve, reject) => {
				        originJSONP(url, option, (err, data) => {
				            if (!err) {
				                resolve(data)
				            } else {
				                reject(err)
				            }
				        })
				    })
				}
	```			
	- 请求发送/src/api/recommend.js
	```js			
				import jsonp from 'common/js/jsonp.js';
				import { commonParams, options } from 'api/config.js';//发送请求时的通用参数
				
				export function getRecommend() {
				    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
				    const data = Object.assign({}, commonParams, {
				        platform: 'h5',
				        uni: 0,
				        needNewCode: 1
				    })
				    return jsonp(url, data, options)
				}
	```			
	- 组件中调用
	```js			
				import { getRecommend } from "api/recommend.js";
				getRecommend().then(res => {
				        if (res.code === ERR_OK) {
				          this.slider = res.data.slider;
				        }
				      });
	```		
			
		
## axios
axios是对ajax技术的封装，一个基于Promise（ES6中用于处理异步的）的HTTP库
- 实例 music项目
		
## fetch
fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象。在Node.js环境下不起作用，仅适用于Web浏览器，可以跨域，返回的是Promise
		
- 安装：```npm install whatwg-fetch --save```
		
- 使用
```		
fetch('/users.json'，options)
  .then(function(response) {//response为返回数据
    return response.json()//转化为json格式
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```		
- 实例 headlines项目


