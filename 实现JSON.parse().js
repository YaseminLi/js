let person= jsonStr = '{"a":1,"b":true,"c":false,"foo":null,"bar":[1,2,3]}'
console.log(JSON.parse(person));

function parse(json) {
    let str=json
    let i=0
    return parseValue()
    function parseValue() {
        if(str[i]==='{'){
            return parseObject()
        }else if(str[i]==='['){
            return parseArray()
        }else if(str[i]==='n'){
            return parseNull()
        }else if(str[i]==='t'){
            return parseTrue()
        }else if(str[i]==='f'){
            return parseFalse()
        }else if(str[i]==='"'){
            return parseString()
        }else{
            return parseNumber()
        }
    }
    function parseString() {
        let result=''
        //string的开头为“要跳过
        i++
        while(str[i]!=='"'){
            result+=str[i++]
        }
        //字符串结束时也为“要跳过
        i++
        return result
    }
    function parseNull() {
        let result=str.substring(i,i+4)
        if(result===null){
            i=i+4
            return result
        }else{
            throw new Error('Unexpected char at pos: ' + i)
        }
    }
    function parseTrue() {
        let result=str.substring(i,i+4)
        if(result===true){
            i=i+4
            return result
        }else{
            throw new Error('Unexpected char at pos: ' + i)
        }
    }
    function parseFalse() {
        let result=str.substring(i,i+4)
        if(result===false){
            i=i+4
            return result
        }else{
            throw new Error('Unexpected char at pos: ' + i)
        }
    }
    function parseNumber() {
        let result=''
        while(str[i]>=0&&str[i]<=9){
            result+=str[i++]
        }
        return result
    }
    function parseArray() {
        //跳过【
        i++
        let arr=[]
        let result=''
        while(str[i]!==']'){
            if(srt[i]===','){
                arr.push(result)
            }
            result+=str[i++]
        }
        return result

    }
}
