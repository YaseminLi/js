let a={x:1,y:{z:2}}
let b=Object.assign({},a)
a.x=11
a.y.z=22
console.log(b);//{ x: 1, y: { z: 22 } }

let c={x:1,y:{z:2}}
let d = Object.freeze(c);
c.x = 11;
c.y.z= 22;
console.log(d); // { x: 1, y: { z: 22 } }

//解构
let e={x:1,y:{z:2}}
let f = {...e};
e.x = 11;
e.y.z= 22;
console.log(f);//{ x: 1, y: { z: 22 } }

const x = {
    a: function() {
      console.log('aaa')
    },
    b: NaN,
  }
  
  const y = JSON.parse(JSON.stringify(x));
  console.log(y.b);
  y.a()


  for(let i=0;i<10;i++){
      let a=document.createElement('a')
      a.innerHTML=`${i}<br>`
      a.addEventListener('click',()=>{
          console.log(i)
      })
      document.body.appendChild(a)
  }