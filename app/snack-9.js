// snack 9
// Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
// Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
console.log('snack 9')

let numUtente = parseInt(prompt('Inserisci un numero'))
console.log(numUtente)

let numCorrente = 0
console.log(numCorrente)

while (numUtente !== numCorrente) {
    numCorrente = numUtente
    console.log(numCorrente)
    numUtente = parseInt(prompt('Inserisci un numero'))
}

