'use strict';

class Box {
    constructor(width, height, depth, weight) {
        this.width = width,
        this.height = height,
        this.depth = depth,
        this.weight = weight
    }
}
const boxFirst = new Box('10cm', '20cm', '30cm', '1000kg');
console.log(boxFirst);

const boxSecond = new Box('1m', '2m', '3m', '1tn');
console.log(boxSecond);

const boxThree = new Box('1km', '20km', '0.5km', '100gr');
console.log(boxThree);

function convert (obj) {
    let arr = Object.values(obj);
    console.log(arr);

    arr.forEach((item) => {
        console.log(typeof(item));
        if (item.endsWith('km')) {
            let i = +item.substring(-1, 2);
            i = i * 100000;
            console.log('popalo km', i);
        }
        if (item.endsWith('m')) {
            let i = +item.substring(-1, 1);
            i = i * 1000;
            console.log('popalo m', i);
        }
        if (item.endsWith('kg')) {
            let i = +item.substring(-1, 2);
            i = i * 1000;
            console.log('popalo kg', i);
        }
        if (item.endsWith('tn')) {
            let i = +item.substring(-1, 2);
            i = i * 1000000;
            console.log('popalo tn', i);
        }
        if (item.endsWith('gr')) {
            let i = +item.substring(-1, 2);
            console.log('popalo gr', i);
        }
        if (item.endsWith('cm') ) {
            let i = +item.substring(-1, 2);
            console.log('popalo cm', i);
        }
    })
}

convert(boxFirst);
convert(boxSecond);
convert(boxThree);
 