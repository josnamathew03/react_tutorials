"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = void 0;
exports.age = 20;
var employee = {
    id: 1,
    name: 'Miss all sunday',
    retire: function (date) {
        console.log(date);
    }
};
employee.retire(new Date());
function kgToLbs(weight) {
    if (typeof weight === 'number') //narrowing
        return weight * 2.2;
    else {
        return Number(weight) * 2.2;
    }
}
console.log(kgToLbs('45'));
var weight;
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase);
    else
        console.log('hola!');
}
greet(undefined);
function arraygeneric(arr) {
    console.log(arr);
}
arraygeneric([1, 2, 3]);
arraygeneric(['ji', 'rfj']);
