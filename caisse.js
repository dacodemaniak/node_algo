/**
 * @name caisse
 * @author Aélion
 * @version 1.0.0
 * @abstract Calcul d'un rendu de monnaie
 */

/**
 * 
 * @param number montant 
 * @param number divider 
 * @return array
 */
function intDiv(montant, divider) {
    return [
        Math.trunc(montant / divider),
        montant % divider
    ]
}

function toPositive(value) {
    return (value < 0) ? value * -1 : value
}

/**
 * @constant
 * Number Montant à payer
 */
const mttAPayer = 26

/**
 * @constant
 * readline-sync
 */
const reader = require('readline-sync');

reader.setDefaultOptions({ encoding: 'utf-8' })
    /**
     * @constant
     * Array Types of money
     */
const caisses = [50, 20, 10, 5, 2]

/**
 * @constant
 * Number Montant versé par le client
 */
const mttVerse = toPositive(reader.questionInt('Montant versé : '))

if (mttVerse < mttAPayer) {
    console.log('Le montant : ' + mttVerse + ' n\'est pas suffisant')
} else {
    // Le montant versé n'est pas inférieur au montant à payer...
    if (mttVerse == mttAPayer) {
        console.log('Merci beaucoup, bonne journée, à bientôt !')
    } else {
        let aRendre = mttVerse - mttAPayer
        let rendus = [];

        for (let i = 0; i < caisses.length; i++) {
            let result = intDiv(aRendre, caisses[i])
            rendus.push(
                [caisses[i], result[0]]
            )
            aRendre = result[1]
        }

        // Finally... maybe... if ever... why not...
        let msg = '';
        for (let i = 0; i < rendus.length; i++) {
            msg += rendus[i][1] + ' * ' + rendus[i][0] + '€\n';
        }
        console.log(msg + '\nPour le personnel : ' + aRendre)
    }
}