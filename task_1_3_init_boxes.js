'use strict';
// 1
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
        console.log('perda');
    }
}
class Meter extends Length {
    calculateLength() {
        return this.length = length * 100;
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

const boxFirst = new Box(widthBoxFirst, heightBoxFirst, depthBoxFirst, weightBoxFirst);
console.log(boxFirst);

let widthBoxSecond = new Meter(1),
    heightBoxSecond = new Meter(2),
    deptBoxSecond = new Meter(3),
    weightBoxSecond = new Tonne(1);

const boxSecond = new Box(widthBoxSecond, heightBoxSecond, deptBoxSecond, weightBoxSecond);
console.log(boxSecond);

let widthBoxThree = new Kilometer(1),
    heightBoxThree = new Kilometer(20),
    depthBoxThree = new Kilometer(0.5),
    weightBoxThree = new Gramm(100);
const boxThree = new Box(widthBoxThree, heightBoxThree, depthBoxThree, weightBoxThree);
console.log(boxThree);


