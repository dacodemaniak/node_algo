/**
 * @name password
 * @author Aélion
 * @version 1.0.0
 * @abstract Password generator
 */

/**
 * Generate aleat bound number
 * @param {*} from 
 * @param {*} to 
 * @return number
 */
function random(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from)
}

function choose(theBox) {
    const indice = random(0, theBox.length - 1);
    return theBox[indice]
}

// Generate char array
const alphas = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

// Generate number array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Generate symbols array
const symbols = [')', '(', '!', '*', '-', '_'];

// First... Evaluate password length
const passwordLength = random(8, 12);

// Initialize password content array
const passwordContents = [];

// Push Maj
passwordContents.push(
        alphas[random(0, alphas.length - 1)].toUpperCase()
    )
    // Push number
passwordContents.push(
    numbers[random(0, numbers.length - 1)]
)

// Push symbol
passwordContents.push(
    symbols[random(0, symbols.length - 1)]
)

// Fill other items
for (let i = 0; i < passwordLength - 3; i++) {
    let boxNumber = random(0, 3);

    switch (boxNumber) {
        case 0: // Alpha min box
            passwordContents.push(
                choose(alphas)
            )
            break;

        case 1: // Number box
            passwordContents.push(
                choose(numbers)
            )
            break;

        case 2: // Alpha maj box
            passwordContents.push(
                choose(alphas).toUpperCase()
            )
            break;

        case 3: // Symbol box
            passwordContents.push(
                choose(symbols)
            )
            break;
    }
}

// Content array full filled
const shuffle = require('shuffle-array');
shuffle(passwordContents);

// Let's print the array
const password = passwordContents.join('');

console.log(password);