"use strict";
let logType = (
// すでに呼び出しシグニチャで定義されているため、
// パラメータに再度型付けする必要はない
message, userID = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userID);
};
function times(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
times(n => console.log(n), 4);
