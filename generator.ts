function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while(true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let fibonacciGenerator = createFibonacciGenerator()

fibonacciGenerator.next()   // {value: 0, done: false}
fibonacciGenerator.next()   // {value: 1, done: false}
fibonacciGenerator.next()   // {value: 1, done: false}
fibonacciGenerator.next()   // {value: 2, done: false}
fibonacciGenerator.next()   // {value: 3, done: false}
fibonacciGenerator.next()   // {value: 5, done: false}

