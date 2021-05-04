function add(a: number, b: number) {
    return a + b;
}

console.log(add(10, 20), add.apply(40, [10, 20]), add.call(null, 10, 20), add.bind(null, 10, 20)())