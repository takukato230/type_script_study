"use strict";
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
// enumからの値取得方法
let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language['English'];
console.log(myFirstLanguage);
console.log(mySecondLanguage);
let constA = Language.English;
console.log(constA);
