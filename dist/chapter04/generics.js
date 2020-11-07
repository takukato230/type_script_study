"use strict";
// Filterの実装
let filter = (array, f) => {
    let result = [];
    for (const e of array) {
        if (f(e)) {
            result.push(e);
        }
    }
    return result;
};
let names = [
    { firstName: 'beth' },
    { firstName: 'bob' },
    { firstName: 'alice' }
];
const firstNameWithB = filter(names, _ => _.firstName.startsWith('b'));
console.log(`firstNameWithB result = ${firstNameWithB.map(_ => _.firstName)}`);
// 型エイリアスにジェネリックを利用すると
// この実装時点でジェネリックの型を宣言する必要が出てくる
let filterNumber = (array, f) => {
    let result = [];
    for (const item of array) {
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
const filterNumberWith123 = filterNumber([1, 2, 3], _ => _ % 2 === 0);
console.log(`filterNumberWith123=${filterNumberWith123}`);
/**
 * mapをジェネリックを使用して自作した関数
 * @param array
 * @param f
 */
function map(array, f) {
    let result = [];
    for (const item of array) {
        result.push(f(item));
    }
    return result;
}
let stringMap = map(['alice', 'bob', 'alias'], _ => _.replace('b', 'c'));
console.log(`stringMap result=${stringMap}`);
// 関数にも利用が可能
function triggerEvent(event) {
    // ...
}
