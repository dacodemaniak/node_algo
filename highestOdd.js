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

// Get the first odd of the values
for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 != 0 && highestOdd == null) {
        highestOdd = values[i];
        firstIndice = i;
    }
}

// Be KISS... show me that f*c*g value
console.log('highestOdd : ' + highestOdd);

// Well... Let's play now
if (highestOdd != null) {
    for (let i = firstIndice + 1; i < values.length; i++) {
        if (isOdd(values[i])) {
            if (values[i] > highestOdd) {
                highestOdd = values[i]
            }
        }
    }
}


console.log('And the winner is : ' + highestOdd);