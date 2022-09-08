'use strict';
// 1
class Weight {
    constructor(weight, type) {
        let expWeight;
        if (type == 'tn') {
            expWeight = weight * 100000
        } 
         else if (type == 'kg') {
            expWeight = weight * 1000
        } else  {
            expWeight = weight
        }

        this.weight = expWeight
    }
}

class Length {
    constructor (length, type) {
        let expLength;
        if (type == 'km') {
            expLength = length * 100000
        } 
        else if (type == 'm') {
            expLength = length * 1000
        } else  {
            expLength = length
        }

        this.length = expLength
    }
}

class Box {
    constructor(width, height, depth, weight) {
        this.width = width,
        this.height = height,
        this.depth = depth,
        this.weight = weight
    }
}

let widthBoxFirst = new Length(10, 'cm'),
    heightBoxFirst = new Length(20, 'cm'),
    depthBoxFirst = new Length(30, 'cm'),
    weightBoxFirst = new Weight(1000, 'kg');

const boxFirst = new Box(widthBoxFirst.length, heightBoxFirst.length, depthBoxFirst.length, weightBoxFirst.weight);
console.log(boxFirst);

let widthBoxSecond = new Length(1, 'm'),
    heightBoxSecond = new Length(2, 'm'),
    deptBoxSecond = new Length(3, 'm'),
    weightBoxSecond = new Weight(1, 'tn');

const boxSecond = new Box(widthBoxSecond.length, heightBoxSecond.length, deptBoxSecond.length, weightBoxSecond.weight);
console.log(boxSecond);

let widthBoxThree = new Length(1, 'km'),
    heightBoxThree = new Length(20, 'km'),
    depthBoxThree = new Length(0.5, 'km'),
    weightBoxThree = new Weight(100, 'gr');
const boxThree = new Box(widthBoxThree.length, heightBoxThree.length, depthBoxThree.length, weightBoxThree.weight);
console.log(boxThree);

// 2
 let boxes = [
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0)),
    new Box((Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*10000).toFixed(0), (Math.random()*100).toFixed(0))
]; 

console.group('10 boxes of random dimension:');
console.log(boxes);
console.groupEnd();

 //max height
let maxHeight = boxes[0];
for (let box of boxes) {
   if (maxHeight.height < box.height) {
       maxHeight = box;
   }
}

//max width
let maxWidth = boxes[0];
for (let box of boxes) {
    if (maxWidth.width < box.width) {
        maxWidth = box
    }
}
 //max depth
 let maxDepth = boxes[0];
 for (let box of boxes) {
    if (maxDepth.depth < box.depth) {
        maxDepth = box
    }  
}

console.group('Get Max rate:')
console.log('Max depth: ', maxDepth);
console.log('Max height: ', maxHeight);
console.log('Max width: ', maxWidth);
console.groupEnd();

// 3
let sumWeight = 0;
boxes.forEach(element => {
    sumWeight += +element.weight
  });
console.log('Total weight: ', sumWeight);

class Car {
    constructor(capacity) {
        this.capacity = capacity
    }
}

let cars = [
    new Car((Math.random()*6000).toFixed(0)),
    new Car((Math.random()*7000).toFixed(0)),
    new Car((Math.random()*8000).toFixed(0)),
    new Car((Math.random()*9000).toFixed(0)),
    new Car((Math.random()*5000).toFixed(0))
];
console.log('All cars: ', cars);

let sortByCapacity = cars.sort((itemFirst, itemNext) => {
    if (itemFirst.capacity > itemNext.capacity) {
        return 1
    } else {
        return -1
    }
});
console.log('Cars sorted by capacity: ', sortByCapacity);

const matchCars = sortByCapacity.filter(car => car.capacity >= sumWeight);
console.log('Cars with appropriate cargo capacity: ', matchCars);
const firstMatchedCar = matchCars[0];
if (firstMatchedCar == undefined) {
    console.log('It is no appropriate cargo capacity car. Try again.');
} else {
    console.log('The most appropriate car:', firstMatchedCar);
}
