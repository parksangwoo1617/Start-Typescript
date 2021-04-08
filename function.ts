// 기명 함수
function add(x: number, y: number): number {
    return x + y;
}

// 익명 함수
let myAdd = function(x: number, y: number): number { return x + y };

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}

let myAdd1: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; }

let myAdd2 = function(x: number, y: number): number { return x + y; }

let myAdd3: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };
