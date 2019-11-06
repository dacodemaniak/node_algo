/**
 * @name somme
 * @author Aélion
 * @abstract Accept two user inputs to sum those values
 * @version 1.0.0
 */

/**
 * @constant
 * Instance of readline-sync, to read user input
 */
const reader = require('readline-sync')

const valeur1 = reader.questionInt('Valeur 1 : ')
const valeur2 = reader.questionInt('Valeur 2 : ')

console.log('Result : ' + (valeur1 + valeur2))