let a1 = [1, 2, 3]
var b1= ['a', 'b']
let c: Array<string> = ['a']
let d = [1, 'a']
const e = [2, 'b']

let f = ['red']   // 값을 string으로 넣었기 때문에 타입스크립트가 배열의 타입을 string으로 인식함. 따라서 배열의 타입은 string이 됨.
f.push('blue')  
f.push(true)  // 에러 string 타입에 boolean 타입을 할당할 수 없음.
console.log(f);

let g = []
g.push(1)
g.push('red')

let h: number[] = []
h.push(1)
h.push('red')   // 에러 number 타입에 string 타입을 할당할 수 없음.