"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var multitype;
multitype = 20;
multitype = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(2, 3));
console.log(add(2));
function fullName(person) {
    console.log("".concat(person.fname, " ").concat(person.lname));
}
var p = {
    fname: 'Bruce'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.empName));
    };
    return Employee;
}());
var emp1 = new Employee('zoro');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mname) {
        return _super.call(this, mname) || this;
    }
    Manager.prototype.managesWork = function () {
        console.log("".concat(this.empName, " manages work"));
    };
    return Manager;
}(Employee));
var m1 = new Manager('luffy');
m1.greet();
m1.managesWork();
