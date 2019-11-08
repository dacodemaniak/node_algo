/**
 * @name highestOdd (US2)
 * @author Aélion
 * @version 1.0.0
 * @abstract Extract the highest odd value of an array
 */

function isOdd(value) {
    return value % 2 != 0;
}

const values = [50, 23, 12, 7, 53, 32, -51]


let highestOdd = null;
let firstIndice = 0;

// ... Change loop for a while...
let i = 0;
while (highestOdd == null && i < values.length) {
    if (isOdd(values[i])) {
        highestOdd = values[i]
        firstIndice = i
    }
    i = i + 1;
}

// Be KISS... show me that f*c*g value
console.log('First odd value in the array : ' + highestOdd);

// Well... Let's play now
if (highestOdd != null) {
    for (let i = firstIndice; i < values.length; i++) {
        if (isOdd(values[i])) {
            if (values[i] > highestOdd) {
                highestOdd = values[i]
            }
        }
    }
}


console.log('And the winner is : ' + highestOdd);