/**
 * @name first
 * @author Aélion
 * @abstract Just poor var manipulation
 * @version 1.0.0
 */

/**
 * @constant
 * Instance of readline-sync, to read user input
 */
const reader = require('readline-sync');

/**
 * @var string
 * Initialized from user input
 */
let myName = reader.question('Hey, what\'s your name : ');


// Out the variable with a concatenation
console.log('Hello ' + myName);