"use strict";
let p = {
    firstName: 'john',
    lastName: 'barrowMan'
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
p = new Person('matt', 'smith');
console.log(p);
