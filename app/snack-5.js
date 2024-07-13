console.log("snack5")

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l’array alla fine.

const num = []
// console.log(num)
const odd = document.getElementById("odd")

for (let i = 0; i < 6; i++) {
    let numA = prompt("inserisci un numero intero")
    let isEven = numA % 2
    // console.log(i, numA, isEven)

    if (isEven !== 0) {
        num.push(numA)
    }
}
console.log(num)
odd.innerHTML = `${num} sono dispari`
