'use strict';
// 1 
// Init boxes without types. 
// Created Classes for every dimensions. 
// Every class includes method which converts data to the smallest one (Gramm and Centimeter).
// Create array of 10 boxes used For loop and random method.

class Weight {
    constructor (weight) {
        this.weight = weight
    }

    calculateWeight() {
        console.log('convert to needed weight')
    }
}
class Gramm extends Weight {
    calculateWeight() {
        return this.weight;
    }
}
class Kilo extends Weight {
    calculateWeight() {
        return this.weight * 1000;
    }
}
class Tonne extends Weight {
    calculateWeight() {
        return this.weight * 100000;
    }
}

class Length {
    constructor (length) {
        this.length = length;
    }
    calculateLength() {
        console.log('convert to needed length')

    }
}
class Centimeter extends Length {
    calculateLength() {
        return this.length;
    }
}
class Meter extends Length {
    calculateLength() {
        return this.length * 100;
    }
}
class Kilometer extends Length {
    calculateLength() {
        return this.length * 100000;
    }
}

class Box {
    constructor(width, height, depth, weight) {
        this.width = width,
        this.height = height,
        this.depth = depth,
        this.weight = weight
    }
    getWidth() {
        return this.width.calculateLength();
    }
    getHeight() {
        return this.height.calculateLength();
    }
    getDepth() {
        return this.depth.calculateLength();
    }
    getWeight() {
        return this.weight.calculateWeight();
    }
}

let widthBoxFirst = new Centimeter(10),
    heightBoxFirst = new Centimeter(20),
    depthBoxFirst = new Centimeter(30),
    weightBoxFirst = new Kilo(10);

const boxFirst = new Box(widthBoxFirst.calculateLength(), heightBoxFirst.calculateLength(), depthBoxFirst.calculateLength(), weightBoxFirst.calculateWeight());
console.log(boxFirst);

let widthBoxSecond = new Meter(1),
    heightBoxSecond = new Meter(2),
    deptBoxSecond = new Meter(3),
    weightBoxSecond = new Tonne(1);

const boxSecond = new Box(widthBoxSecond.calculateLength(), heightBoxSecond.calculateLength(), deptBoxSecond.calculateLength(), weightBoxSecond.calculateWeight());
console.log(boxSecond);

let widthBoxThree = new Kilometer(1),
    heightBoxThree = new Kilometer(20),
    depthBoxThree = new Kilometer(0.5),
    weightBoxThree = new Gramm(100);
const boxThree = new Box(widthBoxThree.calculateLength(), heightBoxThree.calculateLength(), depthBoxThree.calculateLength(), weightBoxThree.calculateWeight());
console.log(boxThree);

//Init boxes.
console.group('Init 10 rundom boxes:');
let boxes = [];
for (let i = 1; i <= 10; i++) {
    let width,
        height,
        depth,
        weight;
    if (i % 2 != 0) {
        width = new Kilometer((Math.random()*i).toFixed(0)),
        height = new Kilometer((Math.random()*i).toFixed(0)),
        depth = new Kilometer((Math.random()*i).toFixed(0)),
        weight = new Tonne((Math.random()*i).toFixed(0));
    } else {
        width = new Meter((Math.random()*i).toFixed(0)),
        height = new Meter((Math.random()*i).toFixed(0)),
        depth = new Meter((Math.random()*i).toFixed(0)),
        weight = new Kilo((Math.random()*i).toFixed(0));
    }

    const box = new Box(width.calculateLength(), height.calculateLength(), depth.calculateLength(), weight.calculateWeight());
    boxes.push(box);
}
console.log(boxes);
console.groupEnd();



