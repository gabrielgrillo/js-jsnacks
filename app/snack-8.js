// snack 08
// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero.
//  Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
// A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC
console.log('Snack 8')

let numCasuale = Math.floor(Math.random() * 11)
console.log(numCasuale)

let numUtente = parseInt(prompt('Prova ad indovinare il numero casuale scelto dal pc'))
console.log(numUtente)

while (numUtente !== numCasuale) {
    console.log('Ritenta')
    numUtente = parseInt(prompt('Prova ad indovinare il numero scelto dal pc'))
}

console.log('Complimenti, hai indovinato')

