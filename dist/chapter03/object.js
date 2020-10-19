"use strict";
// オブジェクトリテラル記法で表現している
let p = {
    firstName: 'john',
    lastName: 'barrowMan'
};
/**
 * 人の名前を表現するクラス
 *
 * @class Person
 */
class Person {
    constructor(
    // publicは「this.firstName = firstName」の省略記法
    firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
p = new Person('matt', 'smith');
console.log(p);
// その他のオブジェクトの形
let questionA;
questionA = { b: 1 };
console.log(questionA);
questionA = { b: 1, 10: true };
console.log(questionA);
let user = {
    firstName: 'add'
};
console.log(user.firstName);
