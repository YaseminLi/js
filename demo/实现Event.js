class EventEmitter {
    constructor() {
        this._events = this._events || new Map();//储存事件-回调健值对
        this._maxListeners = this._maxListeners || 10; //设置可监听事件数量上限
    }
}
//一个监听者时
//监听函数
// EventEmitter.prototype.addListener = function (type, fn) {
//     if (!this._events.get(type)) {
//         this._events.set(type, fn)
//     }
// }
// //触发事件函数
// EventEmitter.prototype.emit = function (type, ...args) {
//     let handler = this._events.get(type)
//     if (args.length > 0) {
//         handler.apply(this,args)
//     } else {
//         handler.call(this)
//     }
//     return true
// }
// const emitter=new EventEmitter()
// emitter.addListener('log',(msg)=>{
//     console.log(msg);
// })
// emitter.emit('log','监听到函数并触发啦！')


//多个监听者时 
//不能超过监听的事件数上限
EventEmitter.prototype.addListener = function (type, fn) {
    let eventsArr = this._events.get(type)
    if (!eventsArr) {
        eventsArr = []
    } else if (eventsArr.length > this._maxListeners) {
        eventsArr.shift()
    }
    eventsArr.push(fn)
    this._events.set(type, eventsArr)
}
//触发事件函数

EventEmitter.prototype.emit = function (type, ...args) {
    let handlerList = this._events.get(type)
    for (let i = 0; i < handlerList.length; i++) {
        let handler = handlerList[i]
        if (args.length > 0) {
            handler.apply(this, args)
        } else {
            handler.call(this)
        }
    }
    return true
}
EventEmitter.prototype.removeListener = function (type, fn) {
    let eventsArr = this._events.get(type)
    if (!eventsArr) {
        console.log('没有该事件');
        return
    }
    let position = eventsArr.findIndex(item =>item === fn)
    console.log(position);
    
    if (position < 0) {
        console.log('没有该监听函数！');
    } else {
        eventsArr.splice(position, 1)
        this._events.set(type, eventsArr)
        console.log('移除监听事件成功');
    }
}
const emitter = new EventEmitter()
for (let i = 0; i < 3; i++) {
    emitter.addListener('log', () => {
        console.log(`事件`);
    })
}
emitter.emit('log', '监听到函数并触发啦！')
emitter.removeListener('log', () => {
    console.log('事件');
})
emitter.removeListener('log', () => {
    console.log('事件');
})