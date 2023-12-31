let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built it objects
let now: Date = new Date();

// Array             => contain only strings values
let colors: string[] = ['red', 'green', 'blue', 'yellow'];

// Array             => contain only numbers values
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array             => contain only boolean values
let truths: boolean[] = [true, false, false, true];

// Classes
class Car {

}

// create instance of Car 
let car: Car = new Car();

// object literal 
let point: { x: number; y: number; } = {
    x: 10,
    y: 20,
};


// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};


// when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);