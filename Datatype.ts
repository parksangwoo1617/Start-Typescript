//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
console.log(color);
color = 'red';
console.log(color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];

x = ["hello", 10];  // 성공
console.log(x[0].substring(1));

//Enum
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(colorName);

//Any
let notSure: any = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);

let notSure1: any = 4;
notSure1.ifItExists();
notSure1.toFixed();

let prettySure: Object = 4;

let list3: any[] = [1, true, 'free'];
console.log(list[1]);
list[1] = 100;
console.log(list[1]);

//Void
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

//Null and Undefined
let u: undefined = undefined;
let n: null = null;

//never
//never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error('Something failed');
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while (true) {
        console.log(1);
    }
}

//Object
declare function create(o: object | null): void;

create({ prop: 0 });
create(null);

//Type assertions
//angle-bracket 문법
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//as 문법
let someValue2: any = "this is a string";

let strLength2: number = (someValue as string).length;