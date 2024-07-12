console.log('SNACK 1')

/*snack 01
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

let num1 = parseFloat(prompt('Inserisci il primo numero'))
let num2 = parseFloat(prompt('Inserisci il secondo numero'))
let numMaggiore = document.getElementById("num-magg")
// console.log(num1, num2)
let nextSnack = document.getElementById("button-next")
console.log(nextSnack)


if (num1 > num2) {
    console.log(num1)
    numMaggiore.innerHTML = num1 + " è il numero più grande"
}
else {
    console.log(num2)
    numMaggiore.innerHTML = num2 + " è il numero più grande"

}