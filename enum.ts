enum Direction {
    up = 1,
    Down,
    Left,
    Right,
}

function direction(recipient: string, message: Direction): void {

}

direction("Princess Caroline", Direction.up);

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "Yes",
}

enum E { X }

enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

enum LogLevel {
    ERROR, WARN, INFO, DEBUG
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}

printImportant("ERROR", 'This is a message');

enum Enum {
    A
}

let a = Enum.A;
let nameOfA = Enum[a];

const enum Enum1 {
    A = 1,
    B = A * 2
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

declare enum Enum {
    A = 1,
    B,
    C = 2
}