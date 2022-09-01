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
        this.type = type
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
/* let boxes = [
    new Box(10, 20, 30, 40),
    new Box(1, 2, 4, 5),
    new Box(13, 22, 44, 52),
    new Box(15, 26, 24, 15),
    new Box(19, 72, 444, 225),
    new Box(71, 289, 4, 65),
    new Box(31, 762, 24, 5),
    new Box(31, 20, 44, 54),
    new Box(100, 12, 4, 25),
    new Box(156, 23, 42, 54)
]; */
let boxes = [];
for (let i = 1; i <= 5; i++) {
    boxes.push(new Box(2 * i, 10 * i, 12 * i, 80 * i));
}
for (let i = 1; i <= 3; i++) {
    boxes.push(new Box(10 * i, 4 * i, 21 * i, 150 * i));
}
for (let i = 1; i <= 2; i++) {
    boxes.push(new Box(20 * i, 1 * i, 8 * i, 40 * i));
}
console.log(boxes);

 //max height
let maxHeight = boxes[0];
for (let box of boxes) {
   if (maxHeight.height < box.height) {
       maxHeight = box;
   }
}

//max width
let maxWidth = boxes[0];
for(let box of boxes) {
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
console.log(maxDepth, 'Max depth');
console.log(maxHeight, 'Max height');
console.log(maxWidth, 'Max width');

// 3
let sumWeight = 0;
boxes.forEach(element => {
    sumWeight += element.weight
  });
console.log(sumWeight, 'Total weight');

class Car {
    constructor(capacity) {
        this.capacity = capacity
    }
}

/* let cars = [];
for (let i = 1; i < 6; i++) {
    cars.push(new Car(i * 650));
} */
let cars = [
    new Car(1000),
    new Car(100),
    new Car(2300),
    new Car(2900),
    new Car(3800)
];
console.log(cars);

let sortByCapacity = cars.sort((itemFirst, itemNext) => {
    if (itemFirst.capacity > itemNext.capacity) {
        return 1
    } else {
        return -1
    }
});
console.log(sortByCapacity);

const matchCars = sortByCapacity.filter(car => car.capacity >= sumWeight);
console.log(matchCars);
const firstMatchedCar = matchCars[0];
console.log(firstMatchedCar);


//4
let n = 5;
let arrFull = [];
for (let i = 0; i <= n - 1; i++) {
    arrFull[i] = []; //столбцы каждая строка - будет новый пустой массив
    for (j = 0; j <= n - 1 ; j++) {
        arrFull[i][j] = '1';   // - строки, каждый новый пустой массив - заполняется 1
    }
}
console.log(arrFull);

// 4.1
let arrUnder = [];
for (let i = 0; i <= n - 1; i++) {
    arrUnder[i] = [];
    for (let j = 0; j <= n - 1; j++) {
        arrUnder[i][j] = '1';
    }
    if (i == 1) {
        arrUnder[i].pop();
        arrUnder[i].push('0');
    }
    if (i == 2) {
        for (let j = 3; j <= n - 1; j++) {
            arrUnder[i][j] = '0';
        }
    } 
    if (i == 3) {
        for (let j = 2; j <= n - 1; j++) {
            arrUnder[i][j] = '0';
        }
    } 
    if (i == 4) {
        for (let j = 1; j <= n - 1; j++) {
            arrUnder[i][j] = '0';
        }
    } 
}
console.log(arrUnder);

//4.2
let nn = 5;
let arr = [];

for (let i = 0; i <= nn - 1; i++) {
    arr[i] = [];
    for (let j = 0; j <= nn - 1; j++) {
        arr[i][j] = '1';
    }

    if (i == 1) {
        for (let j = 0; j <= 0; j++) {
            arr[i][j] = '0';
        }
        for (let j = 4; j <= nn - 1; j++) {
            arr[i][j] = '0';
        }
    }

    if (i == 2) {
        for (let j = 0; j <= 1; j++) {
            arr[i][j] = '0';
        }
        for (let j = 3; j <= nn - 1; j++) {
            arr[i][j] = '0';
        }
    }

    if (i == 3) {
        for (let j = 0; j <= 0; j++) {
            arr[i][j] = '0';
        }
        for (let j = 4; j <= nn - 1; j++) {
            arr[i][j] = '0';
        }
    }
}
console.log(arr);

//4.3