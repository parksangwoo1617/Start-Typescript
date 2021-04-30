type Age = number
type Person = {
	name: string
	age: Age
}

let age: Age = 55;
let driver: Person = {
	name: 'James May',
	age: age
}

type Color = 'red';

let blue: Color = 'red';

type Color2 = 'red'

let x2 = Math.random() < .5

if (x) {
	type Color = 'blue'    // 위의 Color 정의를 덮어씀
	let b: Color = 'blue'
} else {
	let c: Color = 'red'
}