console.log('snack7')

// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito,
//  e stampare tutta la tabellina del 2 fino al numero inserito.
let listElement = document.getElementById('list')
let numA = prompt('Inserisci fino a quale numero scrivere la tabellina del 2')
let numIterazioni = numA / 2
// console.log(numIterazioni)

for (let i = 0; i < numIterazioni + 1; i++) {
    let moltiplicazione = 2 * i
    console.log(moltiplicazione)
    listElement.innerHTML += `<li> ${moltiplicazione} </li>`
}
