"use strict";
/**
 * ジェネレータ関数で作り出す.フィボナッチ数列のジェネレータ
 *  関数名の前のアスタリスクによって、その関数はジェネレータ関数になる.
 *  ジェネレータ関数を呼び出すと、ジェネレータが返却される
 */
function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
function* createNumbers() {
    let n = 0;
    while (1) {
        yield n++;
    }
}
let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
