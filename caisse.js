/**
 * @name caisse
 * @author Aélion
 * @version 1.0.0
 * @abstract Calcul d'un rendu de monnaie
 */

function intDiv(montant, divider) {
    return Math.trunc(montant / divider)
}

function modulo(valeur, divider) {
    return valeur % divider
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

        const billet20 = intDiv(aRendre, 20) // Appel de la fonction intDiv

        aRendre = modulo(aRendre, 20)

        console.log('20 € => ' + billet20)
        console.log('Nouveau à rendre : ' + aRendre)

        const billet10 = intDiv(aRendre, 10)
        aRendre = modulo(aRendre, 10)

        console.log('10 € => ' + billet10)
        console.log('Nouveau à rendre : ' + aRendre)

        const coins = intDiv(aRendre, 2)
        aRendre = modulo(aRendre, 2)

        console.log('2 € => ' + coins)
        console.log('Pour le personnel : ' + aRendre)
    }
}