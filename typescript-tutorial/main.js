"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mess = void 0;
exports.mess = 'hello world';
var mess1 = 'welcome back';
console.log(exports.mess, mess1);
var isBeginer = true;
var total = 3;
var name = 'jos';
var sentance = "i am ".concat(name, "\ni am a beginner in typescript");
console.log(sentance);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2];
var list2 = [1, 2];
var person1 = ['chris', 22];
var colors;
(function (colors) {
    colors[colors["red"] = 5] = "red";
    colors[colors["green"] = 3] = "green";
    colors[colors["blue"] = 4] = "blue";
})(colors || (colors = {}));
;
var c = colors.green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'anyyyyy';
var myVariable = 'srtttt';
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase(); // my variable should be treated as a string and the properties can be then applied
