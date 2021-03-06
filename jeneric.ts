function identity<T>(arg: T): T{
    return arg;
}

let output = identity<string>("myString");

let output1 = identity('myString');

let myIdentity: <T>(arg: T) => T = identity;

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise> (arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length: 10, value: 3});

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");

function create<T>(c: {new(): T;}): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal5 {
    numLegs: number;
}

class Bee extends Animal5 {
    keeper: BeeKeeper;
}

class Lion extends Animal5 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal5>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);

function map<T, U>(array: T[], f: (item: T) => U): U[] {
    //...
}
map(
    ['a', 'b', 'c'],
    _=>_=== 'a'
)

map<string, boolean | string>(
    ['a', 'b', 'c'],
    _=>_ === 'a'
)

let promise = new Promise(resolve => resolve(45))
promise.then(result => result * 4)   // 에러, 왼쪽 연산자가 'any', 'number', 'bigint', enum 타입 중 하나여야 함.

let promise2 = new Promise<number>(resolve => resolve(45))
promise2.then(result => result * 4)          // Promise의 제네릭 타입 매개변수를 명시해서 문제 해결.

type MyEvent<T = HTMLButtonElement> = {   // 제네릭 타입에 기본값 설정
    target: myButton,
    type: string
}

type MyEvent2<T extends HTMLElement = HTMLElement> = {
    target: T
    type: string
}