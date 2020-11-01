"use strict";
function log(message, userID) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userID || 'Not signed in');
}
log('page loading');
log('User signed in', '1811uvoaluluhegfesaubewebebjaigfai');
function logDefault(message, userID = 'Not signed in') {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userID);
}
logDefault('page loading');
logDefault('User signed in', '1811uvoaluluhegfesaubewebebjaigfai');
function logContext(message, context = {}) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, context.userID);
}
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));
function sumVariadic(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumVariadic(1, 2, 3));
