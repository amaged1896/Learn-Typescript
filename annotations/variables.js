var apples = 5;
var speed = "fast";
var hasName = false;
var nothingMuch = null;
var nothing = undefined;
// built it objects
var now = new Date();
// Array             => contain only strings values
var colors = ['red', 'green', 'blue', 'yellow'];
// Array             => contain only numbers values
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array             => contain only boolean values
var truths = [true, false, false, true];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// create instance of Car 
var car = new Car();
// object literal 
var point = {
    x: 10,
    y: 20,
};
// function
var logNumber = function (i) {
    console.log(i);
};
// when to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
