let a3: [number] = [1]

let b3: [string, string, number] = ['malcolm', 'gladwell', 1963]

b3 = ['queen', 'elizabeth', 'ii', 1926]  //에러: string은 number 타입에 할당할 수 없음.

let trainFares: [number, number?] [] = [
	[3.75],
	[8.25, 7.70],
	[10.50]
]
// 다음과 같음
let moreTrainFares: ([number] | [number, number])[] = [
	...
]
  
let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
// 이형 배열
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

let as: readonly number[] = [1, 2, 3]  // readonly number[]
as[4] = 5   // 에러: 할당 불가

//  readonly string[]
type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

//  readonly [number, string]
type D = readonly [number, string]
type E = Readonly<[number, string]>
